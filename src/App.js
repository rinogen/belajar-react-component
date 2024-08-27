// Task:
// 1. Style-nya tidak dipanggil berulang-ulang
// 2. Semua style-nya dijadikan variable
// 3. Value dari masing-masing box, diambil dari variable, bukan di harcode
// 4. Item box menjadi file yang terpisah dan disimpan di folder 'components'
// 5. Panggil di App.js
// 6. Buat folder baru bernama constants dan pindahkan items ke sana
// 7. Panggil variabel items di App.js
// 8. Kita bikin state, dimana state itu value awalnya adalah dari constant
// 9. Kita tambahkan tombol "Tambah Item", ketika tombol di klik, maka akan menambahkan satu item lagi dibawahnya
// 10. Upload tugasnya ke akun github masing-masing, dan kirimkan link repo-nya

import { useState } from "react";
import { Box } from "./components/Box";
import { items } from "./constants/items";
import Button from "./components/Button";

function App() {
  const containerStyle = {
    paddingLeft: "24px",
  };

  const [lists, setList] = useState(items);
  
  const handleAddCard = () => {
    setList([...lists, "New Added"]);
  };  

  return (
    <div style={containerStyle}>
      <h1>Task : Add three Card elements</h1>
      {lists.map((list, index) => (
        <Box key={index} item={list} />
      ))}
      <Button text="Tambah Item" onClick={handleAddCard}></Button>
    </div>
  );
}
export default App;


