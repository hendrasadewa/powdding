const EventInput = [
    {
      name: "event_name",
      label: "Judul",
      placeholder: "Resepsi",
      formType: "textInput",
      required: true,
    },
    {
      name: "event_date",
      label: "Tanggal Acara",
      placeholder: "Pilih tanggal acara",
      formType: "date",
      required: true,
    },
    {
      name: "start_date",
      label: "Jam Mulai",
      placeholder: "Pilih jam mulai acara",
      formType: "date",
      required: true,
    },
    {
      name: "end_date",
      label: "Jam Selesai",
      placeholder: "Pilih jam selesai acara",
      formType: "date",
      required: true,
    },
    {
      name: "is_untill_finish",
      label: "",
      placeholder: "",
      formType: "date",
      required: false,
    },
    {
      name: "zone_time",
      label: "Zona Waktu",
      placeholder: "Pilih zona waktu",
      formType: "select",
      required: false,
    },
    {
      name: "zone_time",
      label: "Zona Waktu",
      placeholder: "Pilih zona waktu",
      formType: "select",
      required: false,
    },
    {
      name: "event_place",
      label: "Tempat",
      placeholder: "Gedung pertemuan",
      formType: "textInput",
      required: false,
    },
    {
      name: "event_address",
      label: "Alamat",
      placeholder: "Masukkan alamat acara",
      formType: "textInput",
      required: true,
    },
    {
      name: "location_url",
      label: "Link Lokasi (Map)",
      placeholder: "https://goo.gl/maps/TtNEyfe5WpMBKjCM8",
      formType: "textInput",
      required: false,
    },
    {
      name: "is_main_event",
      label: "Jadikan Acara Utama",
      placeholder: "",
      formType: "textInput",
      required: false,
    },
    {
      name: "is_hidden_event",
      label: "Sembuntikan Acara",
      placeholder: "",
      formType: "textInput",
      required: false,
    },
  ];
  
  export default EventInput;
  