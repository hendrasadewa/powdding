const CoupleInput = [
  {
    name: "fullname",
    label: "Nama Lengkap",
    placeholder: "Masukkan nama lengkap",
    type: "textInput",
    required: true,
  },
  {
    name: "nickname",
    label: "Nama Panggilan",
    placeholder: "Masukkan nama panggilan",
    type: "textInput",
    required: true,
  },
  {
    name: "father_name",
    label: "Nama Orangtua (Bapak)",
    placeholder: "Bambang",
    type: "textInput",
    required: false,
  },
  {
    name: "mother_name",
    label: "Nama Orangtua (Ibu)",
    placeholder: "Siti",
    type: "textInput",
    required: false,
  },
  {
    name: "other_information",
    label: "Informasi Lainnya",
    placeholder: "Anak ke / Anak pertama / Informasi lainnya",
    type: "textInput",
    required: false,
  },
  {
    name: "ig_username",
    label: "Social Media (Instagram)",
    placeholder: "Masukkan username ig tanpa @",
    type: "textInput",
    required: false,
  },
  {
    name: "profile_pict",
    label: "Foto Diri",
    placeholder: "Upload",
    type: "singleImageInput",
    required: false,
  },
];

export default CoupleInput;
