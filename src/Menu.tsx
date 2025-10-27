import "./Menu.css";

const menuItems = [
    {
        name: "3 Millets Dosa",
        price: 30,
        quantity: 3,
        description:
            "A nutritious crepe made of a blend of millet flours including raagi, jonna and rice, offering a healthy twist on the traditional dosa.",
        imageUrl:
            "https://www.madhuseverydayindian.com/wp-content/uploads/2021/05/instant-crispy-jowar-dosa.jpg",
        preparation_time: 5,
    },
    {
        name: "Aapalu",
        price: 30,
        quantity: 3,
        description:
            "Crisp, thin pancakes typically made from rice flour and spiced with green chilies and herbs.",
        imageUrl:"https://static.toiimg.com/thumb/55705184.cms?imgsize=377971&width=800&height=800",
        preparation_time: 5,
    },
    {
        name: "Idly",
        price: 30,
        quantity: 4,
        description:
            "Soft, steamed rice and lentil cakes, typically served with coconut chutney and sambar.",
        imageUrl:
            "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-1.jpg",
        preparation_time: 5,
    },
    {
        name: "Jonna Dosa",
        price: 30,
        quantity: 3,
        description:
            "Made from sorghum flour, this dosa is rich in fiber and has a distinct, hearty taste.",
        imageUrl:
            "https://i.pinimg.com/originals/ef/d1/ec/efd1ec87a08adf26bec41d793d3ed9c3.jpg",
        preparation_time: 5,
    },
    {
        name: "Masala Dosa",
        price: 35,
        quantity: 1,
        description:
            "A crispy dosa stuffed with a spiced potato filling, served with chutney and sambar, offering a perfect blend of textures and flavors.",
        imageUrl:
            "https://i.pinimg.com/originals/59/3f/3c/593f3cb82d6a8e82b52d20bd95efcff0.jpg",
        preparation_time: 5,
    },
    {
        name: "Mysore Bonda",
        price: 30,
        quantity: 4,
        description:
            "Deep-fried, crispy dumplings made from a spiced urad dal batter, perfect as breakfast item.",
        imageUrl:
            "https://th.bing.com/th/id/OIP.I7j2t-ZtIXny5xF8uFosYAHaLH?rs=1&pid=ImgDetMain",
        preparation_time: 5,
    },
    {
        name: "Onion Dosa",
        price: 35,
        quantity: 1,
        description:
            "A variation of plain dosa topped with finely chopped onions, adding a sweet and savory flavor.",
        imageUrl:
            "https://1.bp.blogspot.com/-fOdo3rSD-K8/WC0_Ozrn07I/AAAAAAAAxzA/pUXSvUhukg8FZnyyilhlmR9uA7pHNqqgQCLcB/s640/IMG_7977A.JPG",
        preparation_time: 5,
    },
    {
        name: "Pesarattu",
        price: 35,
        quantity: 1,
        description:
            "Made from green gram (moong dal), this dosa is light, crispy, and packed with protein.",
        imageUrl:
            "https://th.bing.com/th/id/R.61c6a4c8d839b5fcc0ac544087f9f188?rik=TzY31AEUiwxzJA&riu=http%3a%2f%2fthemagicsaucepan.com%2fwp-content%2fuploads%2f2014%2f04%2f13559729553_eb83656dd6_b-768x1024.jpg&ehk=313H1j0OllH8V%2fQdKDYZTp%2bW1Pc9PWzRcqgjQPnY7mM%3d&risl=&pid=ImgRaw&r=0",
        preparation_time: 5,
    },
    {
        name: "Plain Dosa",
        price: 30,
        quantity: 1,
        description:
            "A thin, crispy crepe made from fermented rice and lentil batter, served with chutney and sambar.",
        imageUrl: "https://wallpapercave.com/wp/wp6734929.jpg",
        preparation_time: 5,
    },
    {
        name: "Poori",
        price: 30,
        quantity: 2,
        description: "Deep-fried, puffed whole wheat bread, served with potato masala.",
        imageUrl:
            "https://i.pinimg.com/originals/f4/8e/e2/f48ee2f124a80aaaf331f5ea1ee4b7ef.jpg",
        preparation_time: 5,
    },
    {
        name: "Punugu",
        price: 30,
        quantity: 4,
        description:
            "Savory fritters made from fermented rice and urad dal batter, seasoned with spices.",
        imageUrl:
            "https://i.pinimg.com/originals/0c/66/39/0c6639151e840de37c7567ecaa85602c.jpg",
        preparation_time: 5,
    },
    {
        name: "Raagi Dosa",
        price: 30,
        quantity: 3,
        description:
            "A healthy dosa variant made from finger millet flour, known for its earthy flavor and high nutritional value.",
        imageUrl:
            "https://i0.wp.com/masalachilli.com/wp-content/uploads/2019/03/Oats-Millet-Dosa-2.jpg?ssl=1",
        preparation_time: 5,
    },
    {
        name: "Sambar Idly",
        price: 35,
        quantity: 3,
        description:
            "Soft idlis soaked in a flavorful, spicy lentil stew called sambar, making for a comforting and filling meal.",
        imageUrl:
            "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-1.jpg",
        preparation_time: 5,
    },
    {
        name: "Upma",
        price: 30,
        quantity: "200g",
        description:
            "A savory semolina porridge cooked with vegetables and spices, often garnished with nuts and curry leaves.",
        imageUrl:
            "https://slurrp.club/wp-content/uploads/2021/03/IMG_20210203_135228.jpg",
        preparation_time: 5,
    },
    {
        name: "Upma Dosa",
        price: 35,
        quantity: 1,
        description:
            "A dosa with a stuffing of savory semolina upma, combining two popular breakfast items in one dish.",
        imageUrl:
            "https://1.bp.blogspot.com/-bnF7s9PPPNs/V-Q0tEHIwPI/AAAAAAAAfLo/jfSXV_m4tDIjh5SpCfA7Ji3jI-ynQXRoACLcB/s1600/DSC_0255-2.jpg",
        preparation_time: 5,
    },
    {
        name: "Vada",
        price: 30,
        quantity: 3,
        description:
            "Crisp on the outside and soft on the inside, these deep-fried lentil donuts are a staple breakfast dish.",
        imageUrl:
            "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/medu-vada-recipe-1.jpg",
        preparation_time: 5,
    },
];


const Menu = () => {
    return (
        <section className="menu-section">
            <h1 className="section-title">Menu</h1>
            <div className="menu-grid">
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`menu-card`}
                    >
                        <img src={item.imageUrl} alt={item.name} className="menu-img" />
                        <h2 className="menu-name">{item.name}</h2>
                        <p className="menu-desc">{item.description}</p>
                        <p className="menu-info">
                            <span>Price: ₹{item.price}</span> | <span>Qty: {item.quantity}</span>{" "}
                            | <span>Prep Time: {item.preparation_time} mins</span>
                        </p>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
