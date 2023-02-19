import { FormEvent } from 'react';

interface Props {
  onSubmit: (email: string, password: string) => void;
  isSubmitting: boolean;
}

interface FormElements extends HTMLFormControlsCollection {
  emailInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
}
interface CredentialFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

function CredentialForm({ isSubmitting, onSubmit }: Props) {
  const handleSubmit = (event: FormEvent<CredentialFormElements>) => {
    event.preventDefault();

    const { emailInput, passwordInput } = event.currentTarget.elements;
    onSubmit(emailInput.value, passwordInput.value);
  };

  return (
    <form className="flex flex-col gap-4 py-2" onSubmit={handleSubmit}>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          name="emailInput"
          className="input input-bordered w-full"
          disabled={isSubmitting}
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="your password"
          name="passwordInput"
          className="input input-bordered w-full"
          disabled={isSubmitting}
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

export default CredentialForm;
