const mockService = {
  servicesDetails: [
    {
      serviceId: 1,
      title: "General X-Ray",
      slug: "general-x-ray",
      hero: {
        title: "General X-Ray",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "General X-Ray",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 2,
      title: "Ultrasound",
      slug: "ultrasound",
      hero: {
        title: "Ultrasound",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 3,
      title: "CT Scan",
      slug: "ct-scan",
      hero: {
        title: "CT Scan",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 4,
      title: "Interventional Procedures",
      slug: "interventional-procedures",
      hero: {
        title: "Interventional Procedures",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 5,
      title: "Dental Imaging",
      slug: "dental-imaging",
      hero: {
        title: "Dental Imaging",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 6,
      title: "Women's Imaging",
      slug: "womans-imaging",
      hero: {
        title: "Women's Imaging",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 7,
      title: "Musculoskeletal Imaging",
      slug: "musculoskeletal-imaging",
      hero: {
        title: "Musculoskeletal Imaging",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 8,
      title: "Pregnancy Imaging",
      slug: "pregnancy-imaging",
      hero: {
        title: "Pregnancy Imaging",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 9,
      title: "Cardiac CT",
      slug: "cardiac-ct",
      hero: {
        title: "Cardiac CT",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 10,
      title: "Shear Wave Elastography",
      slug: "shear-wave-elastography",
      hero: {
        title: "Shear Wave Elastography",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 11,
      title: "Calcium Scoring",
      slug: "calcium-scoring",
      hero: {
        title: "",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
    {
      serviceId: 12,
      title: "BMD",
      slug: "bmd",
      hero: {
        title: "BMD",
        subTitle: "Service",
      },
      content: [
        {
          id: 1,
          title: "What is an X-ray?",
          content:
            "An X-ray (radiograph) is a special image that uses radiation to create 2D pictures of bones and other internal tissues such as your lungs and other organs. We use state of the art digital X-ray equipment, resulting in excellent image quality.",
        },
        {
          id: 2,
          title: "What happens during my X-ray?",
          content:
            "You will be asked to stand or lie down in different positions that allow the best digital image of the body part of interest. During the X-ray, you will be asked to remain as still as possible or hold your breath in order to improve the quality of the images. As is the case with a normal photograph, anything moving will appear blurry and may result in the X-ray being repeated.",
        },
        {
          id: 3,
          title: "How long will it take?",
          content:
            "An X-ray exam usually takes 5 to 10 minutes per area of the body.",
        },
        {
          id: 4,
          title: "Do I need an appointment?",
          content:
            "There is no appointment needed for your X-ray. Come in at a time that works best for you.",
        },
        {
          id: 5,
          title: "How much does it cost?",
          content:
            "At Vision Radiology we pride ourselves on our ability to deliver first class services within the health system using Bulk billing methodology. This means that your X-ray will be bulk billed if you have your medicare card and a practitioners referral with you, and you will have no out of pocket expenses.",
        },
        {
          id: 6,
          title: "Can I use my referral anywhere?",
          content:
            "If you have a referral to another imaging practice or organisation we can still assist you as we put you the patient first and accept all referrals. If in doubt please seek advice from your referring medical professional.",
        },
        {
          id: 7,
          title: "How do I prepare for my X-ray?",
          content:
            "A basic X-ray does not require any special preparation and no appointment is necessary. Metal objects such as watches, keys, coins and jewellery will show up on the X-ray affecting the images and therefore may need to be removed. You may be provided with a gown to wear instead of your own clothes, as some materials and prints will show up on the X-ray. You may also be provided with a special lead lined apron or staff may place a small shield on areas not requiring X-ray.",
        },
      ],
    },
  ],
  servicesList: {
    title: "Our Services",
    servicesList: [
      {
        icon: "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
        title: "General X-Ray",
        slug: "general-x-ray",
        linkTo: `/services/general-x-ray`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/557d6b7e-cb62-4da9-9cab-165277b903f5_ultrasound_icon.svg",
        title: "Ultrasound",
        slug: "ultrasound",
        linkTo: `/services/ultrasound`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/7d88fc27-5073-44bf-ab64-4fbcc01a3c80_Ctscan_icon.svg",
        title: "CT Scan",
        slug: "ct-scan",
        linkTo: `/services/ct-scan`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/e5eb232c-fabd-4d4d-9d89-066260a5f1e0_injection_icon.svg",
        title: "Interventional Procedures",
        slug: "interventional-procedures",
        linkTo: `/services/interventional-procedures`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/2d37021a-d471-4ac2-b463-d6698cdd64bf_dental_icon.svg",
        title: "Dental Imaging",
        slug: "dental-imaging",
        linkTo: `/services/dental-imaging`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
        title: "Women's Imaging",
        slug: "womans-imaging",
        linkTo: `/services/womans-imaging`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
        title: "Musculoskeletal Imaging",
        slug: "musculoskeletal-imaging",
        linkTo: `/services/musculoskeletal-imaging`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/33b2be15-afdc-4553-8a4b-9115a8585f1b_pregnancy_icon.svg",
        title: "Pregnancy Imaging",
        slug: "pregnancy-imaging",
        linkTo: `/services/pregnancy-imaging`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/bc4e79d5-6e82-426a-9510-1eaa2c5080a1_cardiac+CT.svg",
        title: "Cardiac CT",
        slug: "cardiac-ct",
        linkTo: `/services/cardiac-ct`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ca63aae4-8dd4-45c1-ad65-b91c51609b3d_womenimaging_icon.svg",
        title: "Shear Wave Elastography",
        slug: "shear-wave-elastography",
        linkTo: `/services/shear-wave-elastography`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/ab0e8bb7-e318-42e5-9b94-6a034e484e2e_musculloskeleton_icon.svg",
        title: "Calcium Scoring",
        slug: "calcium-scoring",
        linkTo: `/services/calcium-scoring`,
      },
      {
        icon: "https://myopia.cdn.prismic.io/myopia/de16336a-fa5a-4271-a760-8bb7aeafc7a3_x-ray_icon.svg",
        title: "BMD",
        slug: "bmd",
        linkTo: `/services/bmd`,
      },
    ],
  },
};

export default mockService;
