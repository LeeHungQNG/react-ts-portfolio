import { useState } from 'react';
import './Video10.css';

interface IUser {
  name: string;
  age: number;
  city: string;
}

const Video10 = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | string>('');
  const [city, setCity] = useState<string[]>(['Hà Nội', 'Đà Nẵng', 'Hồ Chí Minh']);

  const [users, setUsers] = useState<IUser[]>([
    { name: 'Eric', age: 25, city: 'Hà Nội' },
    { name: 'Eric1', age: 26, city: 'Đà Nẵng' },
    { name: 'Eric2', age: 27, city: 'Hồ Chí Minh' },
  ]);

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  return (
    <>
      <div>Example video 10: hello world </div>
      <div className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input type="text" value={name} />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input type="text" value={age} />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select>
            {city.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          {/* <select>
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>Hồ Chí Minh</option>
          </select> */}
        </div>

        <input type="submit" value="Submit" style={{ margin: '10px 0' }} />
      </div>
      <hr />
      <div>List Users:</div>
      <div className="table-user">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Video10;
