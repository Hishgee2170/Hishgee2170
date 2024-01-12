import style from "@/styles/app.module.css";
import App from "@/app/app";
function Home() {
  return (
    <div className={style.first}>
      <div className={style.flexCenter}>
        <App />
      </div>
    </div>
  );
}
export default Home;
