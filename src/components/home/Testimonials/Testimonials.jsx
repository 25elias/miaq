import places from "../../places";
import Card from "./Card";

// import products from "../../../../public/api/products";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";

var blogs = [
    {
        "id": 3,
        "path": "/",
        "title": "Beach Access Bungalow",
        "image": "/rental_img_1.jpg",
        "category": "Health",
        "address": "Vilmale, Male",
        "type": "Vila/Entire Home",
        "price" : "150",
        "author": "Darrell Etherington",
        "authorPic": "/profile-1.jpg",
        "published_date": "October 4, 2023",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
        "tags": ["Biotech", "Health"]
    },
    {
        "id": 4,
        "path": "",
        "title": "Huge Sunny Villa",
        "image": "/rental_img_2.jpg",
        "category": "Health",
        "address": "Vilmale, Male",
        "type": "Vila/Entire Home",
        "price" : "39",
        "author": "Darrell Etherington",
        "authorPic": "/profile-1.jpg",
        "published_date": "October 4, 2023",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
        "tags": ["Biotech", "Health"]
    },
    {
        "id": 5,
        "path": "/",
        "title": "Paradisos Sea View",
        "image": "/rental_img_3.jpg",
        "category": "Health",
        "address": "Vilmale, Male",
        "type": "Vila/Entire Home",
        "price" : "100",
        "author": "Darrell Etherington",
        "authorPic": "/profile-1.jpg",
        "published_date": "October 4, 2023",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
        "tags": ["Biotech", "Health"]
    },
    {
        "id": 6,
        "path": "/",
        "title": "Sunny Vill with Pool",
        "image": "/rental_img_3.jpg",
        "category": "Health",
        "address": "Vilmale, Male",
        "type": "Vila/Entire Home",
        "price" : "100",
        "author": "Darrell Etherington",
        "authorPic": "/profile-1.jpg",
        "published_date": "October 4, 2023",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
        "tags": ["Biotech", "Health"]
    },
 ]



const Testimonials = ({blogs}) => {
    return(
        <div className="wrapper py-12">
            <h2>Trekker's Highights</h2>
            {
                blogs.map(() => {
                    return(
                        <h1>{blogs.title}</h1>
                    )
                })
            }
            {/* <div className="">
                <Card blog={blogs} />
            </div> */}

            <Link href="/" className="mt-6 inline-flex ml-10 md:hidden btn-cta_secondary">Explore all destination</Link>
        </div>
    );
};



export default Testimonials;