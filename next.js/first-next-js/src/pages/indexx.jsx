export default function Ger() {
  const information = [
    {
      id: 1,
      title: "Bataa",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    },
    {
      id: 2,
      title: "Boldoo",
      imgUrl:
        "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=",
    },
  ];
  return (
    <div>
      {information.map((el) => (
        <h1 key={el.id}>hello {el.title}</h1>
      ))}
    </div>
  );
}
