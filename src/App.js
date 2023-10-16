import BlurHashExample1 from "./BlurHashExample1";
import Post from "./Post";

function App() {
  const img =
    "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <div className="App">
      <BlurHashExample1 image={img} />
      <Post />
    </div>
  );
}

export default App;
