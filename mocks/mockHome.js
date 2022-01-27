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
};

export default mockHome;
