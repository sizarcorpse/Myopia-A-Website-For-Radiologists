const mockAbout = {
  hero: {
    title: "About Us",
    description:
      "Our professional staff are committed to efficiently carrying out the delivery of quality imaging services by utilising evidence-based medicine founded on the latest research and contributes to the scientific literature.",
    background: {
      desktop:
        "https://images.unsplash.com/photo-1583912267670-6575ad472688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=100",
      mobile:
        "https://images.unsplash.com/photo-1583912268183-a34d41fe464a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=100)",
    },
    button: [
      {
        title: "Search our Location",
        linkTo: "/",
        variant: "lightish",
      },
      {
        title: "Book an appointment",
        linkTo: "/",
        variant: "light",
      },
    ],
  },
  introduction: {
    photo: {
      desktop:
        "https://images.prismic.io/myopia/98cba092-c24f-433d-9aa3-eeac72061ce1_locallyownedimage.png",
      mobile: "",
      alt: "we are locally owned and operated",
    },
    title: "locally owned and operated.",
    subtitle: "we are",
    description:
      "Our team of specialised radiologists, technicians and receptionists across our two sites are committed to providing patients and their referring clinicians with the highest standards of care in our modern, professional, and comfortable environments",
    button: [
      {
        title: "Choose a Service",
        linkTo: "/",
        variant: "lightish",
      },
    ],
  },
  doctors: {
    doctorsList: [
      {
        name: "Dr. Maria Pianta",
        profilePhoto:
          "https://images.prismic.io/myopia/5c18ee20-35a5-489b-aa85-c85a3a8f444e_t1.png",
        qualification: "MD, PhD1 (usa)",
        excerpt:
          "Dr. Maria Pianta, MBBS FRANZCR, graduated from Monash University, Melbourne and completed his Radiology training at The Alfred Hospital.",
        bio: "Which included an Interventional Fellowship followed by a second at the University of Alberta Hospital in Canada specialising in Musculoskeletal Imaging. Dr Pianta enjoys all subspecialties of Radiology and has particular interests in arthritis and musculoskeletal tumour imaging as well as performing a range of therapeutic and diagnostic procedures. ",
      },
      {
        name: "Dr. Paula Marovica",
        profilePhoto:
          "https://images.prismic.io/myopia/38cdccf2-0295-400a-923c-f09b167ef10f_t2.png",
        qualification: "MD, PhD1 (usa)",
        excerpt:
          "Paula graduated from Monash University with a Bachelor of Medicine and Bachelor of Surgery with Honours and was awarded the Bryan Hudson prize in Medicine.",
        bio: "she underwent specialist radiology training at the Alfred Hospital, during which time she received the C.E. Eddy Prize in Radiology for the top-ranked candidate in the Part l Examination in Australia and New Zealand Paula completed fellowship subspeciality training in Magnetic Resonance Imaging (MRI) at Epworth Hospital with a focus on Neuro, Head and Neck and Musculoskeletal Radiology. she then went on to work at Imaging at Olympic Park, furthering his ski lls in diagnostic and interventional Musculoskeletal Radiology and pain management. Paula splits his time between Vision Radiology Mornington, where she is our Clinical Director, and the A Alfred Hospital where she works in the subspecialty fields of Musculoskeletal and Trauma Radiology. Paula is a member of the Australian Musculoskeletal Imaging Group (AMSIG) and Australasian Trauma Society (ATS). Paula has a keen interest in research and is well-published in the medical literature. she is an active member of the Royal Australian and New Zealand College of Radiologists where she sits on the interventional Radiology Committee. ",
      },
      {
        name: "Dr. Waen Perera",
        profilePhoto:
          "https://images.prismic.io/myopia/fc86ffee-c1ba-4cb1-ab21-2e218965484e_t3.png",
        qualification: "MD, PhD1 (usa)",
        excerpt:
          "Dr. Waen Perera, MBBS FRANZCR graduated from Monash University, Melbourne. she completed his Radiology training at St Vincent’s Hospital. ",
        bio: "which included a Master of Medicine in Radiology. Wean undertook an MRI fellowship in Vancouver, Canada at The University of British Columbia Hospital, covering all subspecialties with a focus on Musculoskeletal Imaging. Dr Perera has worked extensively both in public and private practice with a recent sabbatical in Body Imaging at Guys & St Thomas’ Hospital in London, UK and Neuroradiology at The Royal Melbourne Hospital. she maintains interests in all subspecialty disciplines of medical imaging however has particular expertise in sports medicine imaging, arthritis and spinal imaging as well as performing a wide range of therapeutic and diagnostic procedures. ",
      },
    ],
  },
};

export default mockAbout;
