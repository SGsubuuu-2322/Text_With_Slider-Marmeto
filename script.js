//

const data = [
  {
    id: 0,
    heading: "Exquisite Watches",
    subHeading: "Gold Luxury, Choose Us",
    desc: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    price: "$499.00",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2ad3/d5c1/bc7c8b7d2ade47a27798d58559b94505?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Py7-0zo-2ULgybdmw5eLb2E6hSrSqtpVkRn3zFRwkkPs8NhNCw76fEwTrhLzl50AKhxdKKVGisZRaG~wJJ-LcpKrl2SKImEWxyP8pUU5FBCtXCk5EKKafB8cpOds8tks2f9APh6IjTkjxPOiyjTT~PkDKCFyCI9hqRPuZnWl1T6Amfav9o0zofIMjiCNp6tstxMegHCTuMMjVtZkzT9B04GH9Ux6tt-BXrR5a5oZlTVrBIjcF9rGLDpfJPGMnqAlmS3g3girl2tYsD-kAWg-KHuC23tOkLgPwzNvG3HKneefpOyaH9FMe-XW8m4SMRSkJQv3Zp98cZcKyOa5~CXjfw__",
  },
  {
    id: 1,
    heading: "Dainty Timepieces",
    subHeading: "Silver Luxury, Choose Us",
    desc: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    price: "$469.00",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9b03/5859/b3cd59b6e82967a441a89bdb7f113601?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4IsGh9QklY8Lb8NKdCWMi2zvGCz8753OJzU6WxAb8uOWqPv5eivhL1FgFNupav~sEaof6S4laUBAd~DtD~nGc4FnWhYNSicPQPJW3SrSYOeEloJomZnSDjyZUgFI1rxeoRyZh8ATgFUn3y6BX0PZKWZ4fa0IV3cJkNz4pfuwCIjW2euSOWGnSQOPzZ1CsDmNKExB~LiXJfdnBrJHraTGHP9n3B5sGIe9cxjO2m-TktigbOVFuRxN~ZoYRGvtLlSbmbTwVpTpLUABSZtkayviOb2S-5oGeU2Zb04WM55Oj3JenP50OslrzOvkrmYRj1Qd~JSz9otUf2vQH1Agab-lw__",
  },
  {
    id: 2,
    heading: "Elegant Timepieces",
    subHeading: "Choose Luxury, Choose Us",
    desc: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    price: "$529.00",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1155/92de/a1e0499b541d8505e2a8b346af7f884f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtDtMC~A3zfL37A1ESzLRLv3iMtmHfGmCYf~lIFUUI~djPFI3uxo39UTnp9WvpoQYcqZh0JF4EGmcapT68YAlceulqWubBB9lsyBdS1X0UmCdNhx6v0kXaIMGicZ8gflQPmtdsqpp4XV7WwpG~IkO4Cdc9KCvAW-uEjwKDELbnpwyx3veZ-rbbp~RU8LFWpGwTxAt4NM4MB5ZerL2ya-9we83pUkhmKtwQQRoZ20YJavZWzzW~4-ghjm26dgwUuOkkLxm~BT0~djjrR1D3aa2AMbXP8de~n5PX6XtVgp2WJS4EpgUlTUvze6nlUuWjvNqOZ2D7y5xBfBMQNfz6UENw__",
  },
  {
    id: 3,
    heading: "Refined Timepieces",
    subHeading: "Choose Luxury, Choose Us",
    desc: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    price: "$599.00",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/c62f/050a/5112960cf7b3fd65ba1ed29d826e710a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ6wKk0KGbYps-0kGuXg0hpOzr9sECM0k-QqzyQrYgVgR5b0Kp~ZHLx0oGtTVH-aFLPm93HKloN6j9Ke~5-mKYqdYJc3wSlymedqrk3t56Jzw8Jf-pRI-3BheEdl1RjCY0SZ5hAso~ysII9zUNgxTKe8KNz1pVCTwJn57XM-Ba34vHxY0rtd0lMnBdQLFa0n4hFzeT~CRCvjJaguI-0KlMO2zA0oo2rO0PCnbfeQBt8bXtfOm~-08mAPyZAyoUucTpnm8UxbihmZL1WjOrJNlzOII-7RkRd6jJ3IkwwzHkymQefmpOPSPRgDYWO-h44uszVzD5K6uB0sL9jRK1ed1A__",
  },
];

// Array of background colors corresponding to each slide
const backgroundColors = [
  "linear-gradient(to right top, #f5ae70, #f5af71, #f5af73, #f5b074, #f5b075, #f6b47c, #f7b882, #f8bc89, #fac497, #fbcda5, #fdd5b3, #feddc1)", // Slide 0
  "linear-gradient(to right top, #b5b7b7, #b6b8b8, #b7bab9, #b8bbbb, #b9bcbc, #bdbfc0, #c0c3c3, #c4c6c7, #cbcccd, #d2d3d4, #d9d9da, #e0e0e0)", // Slide 1
  "linear-gradient(to right top, #3cae62, #3eb064, #40b167, #42b369, #44b56b, #49b970, #4ebe74, #53c279, #5bca81, #64d289, #6cda91, #74e299)", // Slide 2
  "linear-gradient(to right top, #f45f5b, #f56761, #f76e67, #f8766d, #f97d73, #fa8378, #fa897c, #fb8f81, #fc9585, #fd9b8a, #fda18f, #fea794)", // Slide 3
];

const heading = document.querySelector(".heading");
const subHeading = document.querySelector(".sub-heading");
const desc = document.querySelector(".desc");
const price = document.querySelector(".pricing");

// Function to dynamically render slider items
function renderSliderItems(data) {
  const splideList = document.querySelector(".splide__list");
  if (!splideList) {
    console.error("Slider list container not found.");
    return;
  }

  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "splide__slide";

    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.heading || "Image";

    listItem.appendChild(img);
    splideList.appendChild(listItem);
  });
}

// Initialize the slider after dynamically rendering content
document.addEventListener("DOMContentLoaded", function () {
  renderSliderItems(data);

  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: false,
    interval: 3000,
    speed: 800,
    pagination: true,
    arrows: true,
    pagination: false,
    type: "fade",
  })
    .mount()
    .on("moved", (index) => {
      const item = data.find((d) => d.id == index);
      heading.innerText = item.heading;
      subHeading.innerText = item.subHeading;
      desc.innerText = item.desc;
      price.innerText = item.price;

      // Trigger animation
      [heading, subHeading, desc, price].forEach((element) => {
        element.classList.remove("animate-fade-in"); // Remove any existing animation
        void element.offsetWidth; // Force reflow to restart the animation
        element.classList.add("animate-fade-in"); // Add animation class
      });

      // Smoothly animate the background color
      document.body.style.transition = "background 0.8s ease-in-out";
      document.body.style.background = backgroundColors[index];
    });
});
