import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DesignStudioHero from "@/components/hero/DesignStudioHero";
import DigitalMarketingBrand from "@/components/brand/DigitalMarketingBrand";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import DigitalMarketingProtfolio from "@/components/portfolio/DigitalMarketingProtfolio";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";

export default function nyuctIndex() {
  return (
    <div>
      <Head>
        <title>NYUCT</title>
        <meta
          name="description"
          content="NYUCT Design Lab"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <main>
        <RootLayout
          header="header1"
          footer="footer1"
        >
          <DesignStudioHero />
          <DigitalMarketingHero />
          <DigitalMarketingAbout />
          <DigitalMarketingService />
          <DigitalMarketingProtfolio />
          <DigitalMarketingTestimonial />
          <DigitalMarketingWorkflow />
          <DigitalMarketingPrice />
          <DigitalMarketingBlog />
        </RootLayout>
      </main>
    </div>
  );
}
