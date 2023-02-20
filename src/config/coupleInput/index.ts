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
    name: "parents_name",
    label: "Nama Orangtua",
    placeholder: "Bambang dan Siti",
    type: "textInput",
    required: false,
  },
  {
    name: "other_information",
    label: "Informasi Lainnya",
    placeholder: "Anak ke / Putra dari / Informasi lainnya",
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
];

export default CoupleInput;
