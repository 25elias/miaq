
export default function TopNav() {


  return (
    <div className="pt-4 pb-8 w-full flex flex-col sm:flex-row sm:justify-between items-baseline gap-4 ">
        <h4 className='sm:w-1/3 text-4xl text-gray-100 font-light tracking-wider py-2'>Stay up to date</h4>
        <div className="sm:w-1/2 mx-auto ">
            <span className="footer_links ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis molestias iure amet animi est placeat rerum distinctio! Non esse ut eius fugiat! Eveniet quas et possimus odio ut unde ipsum!</span>
            <form className="mt-2" action="">
            <div className="flex items-end justify-between gap-4">
                <input type="email" placeholder="Your email address" className="email-form_footer" />
                <button className="min-w-max h-max footer_links font-bold border-2 border-gray-200  py-2 px-4 cursor-pointer bg-transparent">Sign up</button>
            </div>
            </form>
        </div>
    </div>
  );
};
