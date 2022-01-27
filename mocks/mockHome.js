const mockHome = {
  hero: {
    title: "Community Radiology",
    description:
      "Our professional staff are committed to efficiently carrying out the delivery of quality imaging services by utilising evidence-based medicine founded on the latest research and contributes to the scientific literature.",
    background: {
      desktop:
        "https://images.unsplash.com/photo-1614308457932-e16d85c5d053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=100",
      mobile:
        "https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=100",
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
  services: {
    title: "What we offers.",
    subtitle: "Services",
    servicesList: [
      {
        icon: "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
        title: "General X-Ray",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/557d6b7e-cb62-4da9-9cab-165277b903f5_ultrasound_icon.svg",
        title: "Ultrasound",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/7d88fc27-5073-44bf-ab64-4fbcc01a3c80_Ctscan_icon.svg",
        title: "CT Scan",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/e5eb232c-fabd-4d4d-9d89-066260a5f1e0_injection_icon.svg",
        title: "Interventional Procedures",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/2d37021a-d471-4ac2-b463-d6698cdd64bf_dental_icon.svg",
        title: "Dental Imaging",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
        title: "Women's Imaging",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
        title: "Musculoskeletal Imaging",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/33b2be15-afdc-4553-8a4b-9115a8585f1b_pregnancy_icon.svg",
        title: "Pregnancy Imaging",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/bc4e79d5-6e82-426a-9510-1eaa2c5080a1_cardiac+CT.svg",
        title: "Cardiac CT",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
        title: "Shear Wave Elastography",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
        title: "Calcium Scoring",
        linkTo: "/services/service",
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
        title: "BMD",
        linkTo: "/services/service",
      },
    ],
  },
};

export default mockHome;
