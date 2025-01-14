import { useState } from "react";

export const CreateStore = () => {
    const [users, setUsers] = useState([
      { id: 1, userName: "שרה", email: "sara@gmail.com", password: "s1234!" ,role:"manager" },
      { id: 2, userName: "רבקה", email: "rivka@gmail.com", password: "r1234!", role:"user" },
      { id: 3, userName: "רחל", email: "rachel@gmail.com", password: "r1234!", role:"user" },
      { id: 4, userName: "לאה", email: "leah@gmail.com", password: "l1234!", role:"user" },
    ]);

    const [currentUser, setCurrentUser] = useState(null);

    return {
      users,
      setUsers,
      currentUser,
      setCurrentUser,
      login: (email, password) => {
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
          alert("אחד הפרטים שהזנו שגוי");
          return false;
        } else {
          setCurrentUser(user);
          alert("התחברת בהצלחה");
          return true;
        }
      },
      register: (newUser) => {
        if (users.includes(user => user.email === newUser.email)) {
          alert("המייל שהזנת כבר קיים במערכת");
          return false;
        }
        if (newUser.password.length < 6) {
          alert("הסיסמא צריכה להיות באורך של לפחות 6 תווים");
          return false;
        }
        if (!newUser.userName || !newUser.email || !newUser.password) {
          alert("אחד הפרטים שהזנו שגוי");
          return false;
        } else {
          newUser.id = [users.lengt - 1].id + 1;
          setUsers([...users, newUser]);
          setCurrentUser(newUser);
          console.log("הרשמתך בוצעה בהצלחה");
          return true;
        }
      },
      logout: () => {
        setCurrentUser(null);
        console.log("התנתקת בהצלחה");
      },
    };
}