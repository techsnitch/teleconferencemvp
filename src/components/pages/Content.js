import React from "react";
import image from "../../images/telco_image_1.svg";

const Content = () => {
  return (
    <>
      <div class="nextsection  lightblue w-100 py-20">
        <div class="max-w-screen-lg mx-auto flex justify-between">
          <div class="left">
            <p class="nextsection-p georgia font-bold w-1/3 text-3xl mb-8">
              Video conferencing at it's best!
            </p>

            <p class="nextsection-p w-2/4 arial font-medium text-sm mb-12">
              The best video conferencing application you can ever think about,
              available on mobile, tablet and desktop interphase. Excellent user
              experience is topnotch and unlimited connection with your remote
              team.
            </p>

            <p
              href=""
              class="register bg-orange px-3 text-xs py-2 rounded-md text-white uppercase inline-block mb-40"
            >
              Request a demo
            </p>
          </div>
          <div class="right w-full">
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;