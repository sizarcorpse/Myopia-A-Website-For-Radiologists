const mockServices = {
  hero: {
    title: "Our Services",
    description:
      "At Vision Radiology we take a patient focused approach to ensure our patients are well looked after and informed from the time the appointment is made.",
    background: {
      desktop:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=100",
      mobile:
        "https://images.unsplash.com/photo-1581090122319-8fab9528eaaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=100",
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
  services: {
    title: "What we offers.",
    subtitle: "Services",
    servicesList: [
      {
        icon: "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
        title: "General X-Ray",
        slug: "general-x-ray",
        linkTo: "/services/general-x-ray",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/557d6b7e-cb62-4da9-9cab-165277b903f5_ultrasound_icon.svg",
        title: "Ultrasound",
        slug: "ultrasound",
        linkTo: "/services/ultrasound",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/7d88fc27-5073-44bf-ab64-4fbcc01a3c80_Ctscan_icon.svg",
        title: "CT Scan",
        slug: "ct-scan",
        linkTo: "/services/ct-scan",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/e5eb232c-fabd-4d4d-9d89-066260a5f1e0_injection_icon.svg",
        title: "Interventional Procedures",
        slug: "interventional-procedures",
        linkTo: "/services/interventional-procedures",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/2d37021a-d471-4ac2-b463-d6698cdd64bf_dental_icon.svg",
        title: "Dental Imaging",
        slug: "dental-imaging",
        linkTo: "/services/dental-imaging",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
        title: "Women's Imaging",
        slug: "womans-imaging",
        linkTo: "/services/womans-imaging",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
        title: "Musculoskeletal Imaging",
        slug: "musculoskeletal-imaging",
        linkTo: "/services/musculoskeletal-imaging",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/33b2be15-afdc-4553-8a4b-9115a8585f1b_pregnancy_icon.svg",
        title: "Pregnancy Imaging",
        slug: "pregnancy-imaging",
        linkTo: "/services/pregnancy-imaging",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/bc4e79d5-6e82-426a-9510-1eaa2c5080a1_cardiac+CT.svg",
        title: "Cardiac CT",
        slug: "cardiac-ct",
        linkTo: "/services/cardiac-ct",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
        title: "Shear Wave Elastography",
        slug: "shear-wave-elastography",
        linkTo: "/services/shear-wave-elastography",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
        title: "Calcium Scoring",
        slug: "calcium-scoring",
        linkTo: "/services/calcium-scoring",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
        title: "BMD",
        slug: "bmd",
        linkTo: "/services/bmd",
      },
    ],
  },
  why: {
    title: {
      color1: "State of the art",
      color2: "Technology",
    },
    description:
      "Myopia Radiology uses the best CT technology on the market, Canon Aquilion Prime 160 Slice CT Scanner, a scanner that provides better care and safer imaging.",

    benefits: [
      {
        icon: "https://images.prismic.io/myopia/87882026-2ec4-4f5f-9abc-9e46ca7eb042_89.png",
        title: "Qualifierd doctors",
        description:
          "Reliable & EfficientFrom paediatric to bariatric, it is designed and automated to deliver high quality data.",
      },
      {
        icon: "https://images.prismic.io/myopia/9c4b6b73-5123-432f-99d0-27b265b7de8c_004.png",
        title: "Online enrollment",
        description:
          "Utilising PUREVision technology to improve imaging efficiency with up to 31% less dose.",
      },
      {
        icon: "https://images.prismic.io/myopia/9170734e-42c9-4d38-af23-2954dcf8df02_002.png",
        title: "Free consultation",
        description:
          "Simplified workflow providing consistent quality results.",
      },
      {
        icon: "https://images.prismic.io/myopia/ef7d4568-7469-4473-9674-fd392006ef74_003.png",
        title: "Mordern facilities",
        description:
          "Ultra low dose CT with the artificial intelligence AiCE assisted CT producing  diagnostic images.",
      },
    ],
    photo: {
      desktop:
        "https://images.prismic.io/myopia/98cba092-c24f-433d-9aa3-eeac72061ce1_locallyownedimage.png",
      mobile: "",
      alt: "we are locally owned and operated",
    },
  },
};

export default mockServices;
