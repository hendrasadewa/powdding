import { FormEvent } from 'react';
import { ProfileFormPayload } from './types';

interface FormElements extends HTMLFormControlsCollection {
  phoneInput: HTMLInputElement;
  fullnameInput: HTMLInputElement;
}

interface CredentialFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  fullname: string;
  phone: string;
  isSubmitting: boolean;
  userId: string;
  onSubmit: (payload: ProfileFormPayload) => void;
}

function ProfileForm({
  fullname,
  phone,
  isSubmitting,
  userId,
  onSubmit,
}: Props) {
  const handleSubmit = (event: FormEvent<CredentialFormElements>) => {
    event.preventDefault();
    const { phoneInput, fullnameInput } = event.currentTarget.elements;

    onSubmit({
      phone: phoneInput.value,
      fullname: fullnameInput.value,
      id: userId,
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nomor Telepon Aktif (WA)</span>
        </label>
        <label className="input-group">
          <span>+62</span>
          <input
            type="tel"
            placeholder="8123445566"
            name="phoneInput"
            className="input input-bordered w-full"
            disabled={isSubmitting}
            defaultValue={phone}
          />
        </label>
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nama Lengkap</span>
        </label>
        <input
          type="text"
          placeholder="Nama lengkap Anda"
          name="fullnameInput"
          className="input input-bordered w-full"
          disabled={isSubmitting}
          defaultValue={fullname}
        />
      </div>
      <div className="form-control w-full">
        <button className="btn" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
