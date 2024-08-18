import HomPage from "./components/HomPage";

function page() {
  return (
    <div className="h-screen">
      <div
        class="relative h-4/6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/top-banner2.jpg)",
        }}
      >
        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:p-6 md:p-8 lg:p-10 p-2 ">
          <HomPage />
        </div>
      </div>
    </div>
  );
}

export default page;
