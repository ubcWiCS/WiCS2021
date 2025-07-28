import React from "react";

const NewsletterSignupTailwind = () => {
  return (
    <div className="flex flex-col items-center text-center bg-[#fdfdfb] py-10 my-10">
      <h2 className="text-2xl font-bold mb-2">Don’t Miss Out!</h2>
      <p className="text-gray-700 mb-6">
        Sign up for our newsletter to get latest resources, tips and upcoming events
      </p>

      <form
        action="https://ubcwics.us21.list-manage.com/subscribe/post?u=4d61e9a5664cb96d340a8ebf0&amp;id=e41b821ff3&amp;f_id=00afb7e1f0"
        method="post"
        target="_blank"
        className="flex items-center gap-2"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="ex: myname@example.com"
          required
          className="px-4 py-2 rounded-md bg-textboxColor  placeholder-placeholder-light text-gray-700 focus:outline-none w-64"
        />

        <input
          type="submit"
          value="SUBMIT"
          className="px-6 py-2 bg-wicsPurple text-white font-semibold rounded-full hover:bg-[#9d76d2] transition-colors cursor-pointer"
        />

        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input
            type="text"
            name="b_4d61e9a5664cb96d340a8ebf0_e41b821ff3"
            tabIndex="-1"
            defaultValue=""
          />
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignupTailwind;
