import Box from "@/components/dawtaltBuyuUildel";
import Info from "@/information/users";

const users = Info();
export default function App() {
  return <Box userData={users} />;
}
