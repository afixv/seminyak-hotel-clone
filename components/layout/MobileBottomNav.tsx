"use client";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-30 h-[70px] pl-3 bg-[#f3f4f1] sm:hidden block shadow-header transition-all duration-300">
      <ul className="flex justify-between items-center h-full">
        <li className="w-[calc(50%/4)] flex justify-center">
          <button
            className="text-primary focus:ring-0 uppercase flex justify-center flex-col items-start gap-0.5 text-[.8rem] h-[35px] group transition-all duration-300"
            type="button">
            Menu
            <span className="block! h-px w-full bg-primary mb-[3px] group-hover:w-[70%] transition-all duration-300"></span>
            <span className="block! h-px w-full bg-primary mb-[3px]"></span>
            <span className="block! h-px w-[50%] bg-primary"></span>
          </button>
        </li>
        <li className="flex items-center justify-center w-[calc(50%/4)]">
          <a href="tel:623612099999" className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#000000"
              viewBox="0 0 256 256">
              <path d="M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"></path>
            </svg>
          </a>
        </li>
        <li className="flex items-center justify-center w-[calc(50%/4)]">
          <a
            href="mailto:hotelindigobali.reservations@ihg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#000000"
              viewBox="0 0 256 256">
              <path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"></path>
            </svg>
          </a>
        </li>
        <li className="w-[50%]">
          <a
            href="https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=DPSIN&PMID=99502222&&icdv=99502222"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center">
            <span className="text-[5vw] text-[#F5F6F1] bg-primary w-full h-[70px] flex items-center justify-center">
              <p className="text-[.9rem] font-primary uppercase text-white">
                Check Availability
              </p>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
