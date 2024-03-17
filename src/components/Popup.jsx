import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Popup = () =>{
  const store = React.useContext(Context);

  return (
      <div className="popup" onClick={()=>{store.userStore.setOpen(false)}}>
          <div className="popup-box">
            <div className="header">
                <h1>{store.userStore.User?.name}</h1>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="black" onClick={()=>{store.userStore.setOpen(false)}}/></svg>
            </div>
            <div className="info">
            <table>
                <tbody>
                    <tr>
                        <td>Телефон:</td>
                        <td>Почта:</td>
                        <td>Дата приёма:</td>
                        <td>Должность:</td>
                        <td>Подразделение:</td>
                    </tr>
                    <tr>
                        <td className="info-text">{store.userStore.User.phone}</td>
                        <td className="info-text">{store.userStore.User.email}</td>
                        <td className="info-text">{store.userStore.User.hire_date}</td>
                        <td className="info-text">{store.userStore.User.position_name}</td>
                        <td className="info-text">{store.userStore.User.department}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="footer">
                <p>Дополнительная информация:</p>
                <p className="info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est sed veritatis recusandae ipsam! Molestiae reiciendis odio fugit quisquam, officiis ad et at soluta delectus</p>
            </div>
          </div>
      </div>
  );
}

export default observer(Popup);