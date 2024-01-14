import ape from "../imgs/drawing.png"

const Navbar = () => {
  return (
    <div className="w-11/12 h-30 flex flex-row space-x-2 items-start pb-5">


      <div className=" flex items-center pl-6 justify-left rounded-[63px] bg-[#333543] w-1/4 h-full">
        <img className="pr-1 h-10 w-15" src={ape} />

        <p className="text-white text-[30px] font-normal font-['PP Radio Grotesk']">ApeEducation</p>
      </div>


      <div className="pl-8 flex items-center justify-left rounded-[63px] bg-[#D9D9D9] w-1/2 h-full">
        <input
          type="search"
          class="placeholder-zinc-700 relative m-0 block min-w-0 flex-auto rounded bg-transparent bg-clip-padding [text-zinc-700 text-[30px] font-normal font-['PP Radio Grotesk'] leading-[1.6] outline-none focus:border-transparent"
          placeholder="Search"
        />

        <span
          class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
          id="basic-addon2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-7 w-7">
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </div>

      <div className="pl-8 flex items-center justify-left rounded-[63px] bg-[#D9D9D9] w-1/4 h-full gap-x-32">
        <p className="[text-zinc-700 text-[30px] font-normal font-['PP Radio Grotesk']">Menu</p>
        <svg width="20" height="18" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="&#240;&#159;&#166;&#134; emoji &#34;sparkles&#34;">
            <g id="Group">
              <path id="Vector" d="M12.1706 4.35957C11.7521 4.18663 11.4232 3.85515 11.2588 3.45163L9.89856 0.3675C9.64444 -0.1225 8.91202 -0.1225 8.67284 0.3675L7.3126 3.45163C7.13323 3.85515 6.80439 4.17221 6.4008 4.35957L4.66688 5.10898C4.15865 5.35398 4.15865 6.06017 4.66688 6.30517L6.4008 7.05458C6.81933 7.22752 7.14819 7.55899 7.3126 7.96252L8.67284 11.061C8.92696 11.5511 9.65939 11.5511 9.89856 11.061L11.2588 7.96252C11.4381 7.55899 11.767 7.24194 12.1706 7.05458L13.9046 6.30517C14.4127 6.06017 14.4127 5.35398 13.9046 5.10898L12.1706 4.35957Z" fill="#212121" />
              <path id="Vector_2" d="M33.6777 13.6494C32.435 13.0961 31.4523 12.077 30.9321 10.825L26.8424 1.15747C26.091 -0.385825 23.909 -0.385825 23.1576 1.15747L19.0678 10.825C18.5333 12.077 17.5506 13.0961 16.3223 13.6494L11.1488 15.9936C9.61705 16.7506 9.61705 18.9637 11.1488 19.7207L16.3223 22.0648C17.565 22.6181 18.5477 23.6373 19.0678 24.8893L23.1576 34.5568C23.909 36.1001 26.091 36.1001 26.8424 34.5568L30.9321 24.8893C31.4667 23.6373 32.4494 22.6181 33.6777 22.0648L38.8511 19.7207C40.383 18.9637 40.383 16.7506 38.8511 15.9936L33.6777 13.6494Z" fill="#212121" />
              <path id="Vector_3" d="M8.97299 23.3291C9.20247 23.8888 9.62092 24.3225 10.1474 24.5744L12.3611 25.6099C13.0224 25.9458 13.0224 26.9112 12.3611 27.2471L10.1474 28.2826C9.62092 28.5345 9.20247 28.9822 8.97299 29.5279L7.21823 33.7819C6.89425 34.4535 5.96288 34.4535 5.63891 33.7819L3.88414 29.5279C3.65467 28.9682 3.23621 28.5345 2.70979 28.2826L0.49606 27.2471C-0.165353 26.9112 -0.165353 25.9458 0.49606 25.6099L2.70979 24.5744C3.23621 24.3225 3.65467 23.8748 3.88414 23.3291L5.63891 19.0751C5.96288 18.4035 6.89425 18.4035 7.21823 19.0751L8.97299 23.3291Z" fill="#212121" />
            </g>
          </g>
        </svg>


      </div>

    </div>
  );
};

export default Navbar;
