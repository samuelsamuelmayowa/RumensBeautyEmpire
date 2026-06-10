import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import PageHeader from "./pageHeader";

const BgChange = () => {
  const { pathname } = useLocation();

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center z-[9999]">
      <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
        <div className="absolute top-0 left-0 w-full h-full scale-[4] lg:scale-150">
          <ReactPlayer
            url="YOUR_BEAUTY_VIDEO_URL_HERE"
            playing
            muted
            loop
            width="100%"
            height="100%"
            className="!absolute !top-0 !left-0 !w-full !h-full"
            style={{ pointerEvents: "none" }}
          />
        </div>

        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {pathname === "/" && (
        <PageHeader
          subtitle="Welcome to"
          title="Rumen Signature Beauty Empire"
          description={
            <>
              Enhancing Beauty. Creating Confidence. <br />
              Premium braids, cornrows, wigs, and luxury hair styling.
            </>
          }
          align="center"
        />
      )}

      {pathname === "/about" && <PageHeader title="About Rumen Signature" />}
      {pathname === "/gallery" && <PageHeader title="Hair Gallery" />}
      {pathname === "/services" && <PageHeader title="Our Services" />}
      {pathname === "/contact" && <PageHeader title="Book Appointment" />}
    </div>
  );
};

export default BgChange;
// import ReactPlayer from 'react-player';
// import { useLocation } from "react-router-dom";

// import PageHeader from "./pageHeader"

// const BgChange = () => {
//   const { pathname } = useLocation()
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center z-[9999]">
//       <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
//         <div className="absolute top-0 left-0 w-full h-full scale-[4] lg:scale-150">
//           <ReactPlayer
//             url="https://player.vimeo.com/video/1085563688?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//             playing
//             muted
//             loop
//             width="100%"
//             height="100%"
//             className="!absolute !top-0 !left-0 !w-full !h-full"
//             style={{ pointerEvents: "none" }}
//           />
//         </div>
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       {pathname === "/" && (
//         <PageHeader
//           subtitle="Welcome to"
//           title="BAMS VISUALS"
//           description={
//             <>
//               A wedding film is more than just a recording —<br />
//               It’s a timeless keepsake, capturing the emotions
//               and memories you’ll cherish for a lifetime.
//             </>
//         }
//           align="center"
//         />
//       )}

//       {pathname === "/about" && <PageHeader title="About Us" />}
//       {pathname === "/gallery" && <PageHeader title="FILMS" />}
//       {pathname === `/projectDetail/${pathname.slice(pathname.length - 1, pathname.length)}` && <PageHeader title="PROJECT DETAIL" />}
//     {pathname === "/contact" && <PageHeader title="CONTACT US" />}
//     </div>
//   );
// };

// export default BgChange;
