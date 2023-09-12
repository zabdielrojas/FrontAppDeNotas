import { Note } from "../../components/Note";
export const HomePage = () => {
  return (
    <main>
      <Note note={{ title: "hola", text: "Hola buenas tardes soy una nota", image: "https://images.pexels.com/photos/5500232/pexels-photo-5500232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} />
    </main>
  );
};
export default HomePage;
