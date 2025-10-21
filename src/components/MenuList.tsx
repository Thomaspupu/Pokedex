import MenuItem from "./MenuItem";

function MenuList({ foodItems }: { foodItems: FoodProps[] }) {
  console.log(foodItems);

  return (
    <>
      {foodItems.map((food) => (
        <MenuItem
          key={food}
          id={food.id}
          itemName={food.itemName}
          description={food.description}
          foodImage={food.foodImage}
          price={food.price}
          isFavorite={food.isFavorite}
        ></MenuItem>
      ))}
    </>
  );
}

interface FoodProps {
  id: number;
  itemName: string;
  description: string;
  foodImage: string;
  price: number;
  isFavorite: boolean;
}

export default MenuList;
