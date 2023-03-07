const CoverInput = [
  {
    name: "display_name_male",
    label: "Display Name Calon Mempelai Pria",
    placeholder: "Masukkan display name calon mempelai pria",
    formType: "textInput",
    required: true,
  },
  {
    name: "display_name_female",
    label: "Display Name Calon Mempelai Wanita",
    placeholder: "Masukkan display name calon mempelai wanita",
    formType: "textInput",
    required: true,
  },
  {
    name: "display_event_date",
    label: "Pilih Tanggal Acara yang Tampil di Cover",
    placeholder: "Pilih tanggal acara",
    formType: "select",
    required: true,
  },
  {
    name: "cover_pict",
    label: "Foto Cover",
    placeholder: "Upload",
    formType: "singleImageInput",
    required: false,
  },
];

export default CoverInput;
