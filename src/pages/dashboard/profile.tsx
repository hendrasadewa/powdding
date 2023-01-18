import DrawerLayout from '@/components/Dashboard';
import ProfileForm from '@/components/Profile/ProfileForm';
import { ProfileFormPayload } from '@/components/Profile/types';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { AuthApiError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

function ProfilePage() {
  const supabase = useSupabaseClient();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [profile, setProfile] = useState<any>(undefined);

  const user = useUser();

  useEffect(() => {
    const getProfileById = async () => {
      const result = await supabase
        .from('profile')
        .select('*')
        .eq('id', user?.id)
        .limit(1)
        .single();

      setProfile(result.data);
    };

    if (user?.id) {
      getProfileById();
    }
  }, [user]);

  if (!user) {
    return <div>not allowed...</div>;
  }

  const handleSubmit = async (payload: ProfileFormPayload) => {
    try {
      setSubmitting(true);
      const result = await supabase.from('profile').upsert(payload);

      if (result.error) {
        throw result.error;
      }
    } catch (error) {
      if (error instanceof AuthApiError) {
        alert(error.message);
      }
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DrawerLayout title="Kelola Profil">
      <ProfileForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        phone={profile?.phone}
        fullname={profile?.fullname}
        userId={user.id}
      />
    </DrawerLayout>
  );
}

export default ProfilePage;
