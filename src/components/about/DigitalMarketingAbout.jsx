import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";
import Link from "next/link.js";
import About31 from "../../../public/assets/imgs/about/3/1.webp";
import Image from "next/image.js";

gsap.registerPlugin(ScrollSmoother);

const DigitalMarketingAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area-3">
        <div className="container pt-140 pb-110">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__img-3">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={About31}
                  alt="About Thumbnail"
                  data-speed="auto"
                  className="smootherReset768"
                />
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">What we do</h2>
                <h3 className="sec-title title-anim">
                  INVENT, <br />
                  DESIGN,
                  <br />
                  REIMAGINE
                </h3>
              </div>
              <div className="sec-text-wrapper">
                <div className="sec-text text-anim">
                  <p>
                    As a business, a maker, a founder, a brand or as an organisation one has to creatively reimagine every day. For out of syllabus problems, you need out of the box solutions,
                    exceptional products and services. This requires entrepreneurial design partners to help you bring transformative ideas to life.
                    <br />
                    <br />
                    Ventures designers can help your business and organisation innovate and be agile in getting ideas to prototype or market. A multidisciplinary collective and founder-friendly
                    technology by your side can simplify your work in designing the new or reimagining the old.
                  </p>
                  <div className="btn_wrapper">
                    <Link
                      className="wc-btn-light btn-hover btn-item"
                      href="/about"
                    >
                      <span></span> Explore Us <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingAbout;
