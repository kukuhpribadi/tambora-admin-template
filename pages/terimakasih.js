import React from "react";
import CreditList from "../components/CreditList";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

const terimakasih = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-5 gap-5 mt-5">
          {/* card */}
          <CreditList
            img="/img/img-profile.jpg"
            creator={
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@stet?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Roman Stetskov
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            }
          />
          {/* card */}
          <CreditList
            img="/img/img-profile2.jpg"
            creator={
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@midashofstra?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Midas Hofstra
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            }
          />
          {/* card */}
          <CreditList
            img="/img/img-profile3.jpg"
            creator={
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@sethdoylee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Seth Doyle
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            }
          />
          {/* card */}
          <CreditList
            img="/img/img-profile4.jpg"
            creator={
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@sethdoylee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Seth Doyle
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            }
          />
          {/* card */}
          <CreditList
            img="/img/img-profile5.jpg"
            creator={
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@joanna_nix?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Joanna Nix-Walkup
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            }
          />
        </section>
      </div>
    </div>
  );
};

export default terimakasih;
