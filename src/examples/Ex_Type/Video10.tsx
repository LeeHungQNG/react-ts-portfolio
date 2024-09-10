import { useState } from 'react';
import './Video10.css';

interface IUser {
  name: string;
  age: number | string;
  city: string;
}

interface IProps {
  defaultName: string;
  defaultAge: number | string;
}

const Video10 = (props: IProps) => {
  const { defaultName, defaultAge } = props;
  const [name, setName] = useState<string>(defaultName);
  const [age, setAge] = useState<number | string>(defaultAge);

  const [city, setCity] = useState<string[]>(['Hà Nội', 'Đà Nẵng', 'Hồ Chí Minh']);
  const [selectedCity, setSelectedCity] = useState<string>('Hồ Chí Minh');

  const [users, setUsers] = useState<IUser[]>([
    { name: 'Eric', age: 25, city: 'Hà Nội' },
    { name: 'Eric1', age: 26, city: 'Đà Nẵng' },
    { name: 'Eric2', age: 27, city: 'Hồ Chí Minh' },
  ]);

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  const handleSubmitForm = (event: React.FormEvent<HTMLInputElement>) => {
    // event.preventDefault();
    const user = {
      name: name,
      age: age,
      city: selectedCity,
    };

    // users.push(user); // modify state direcly => not recommend
    // setUsers(users);

    setUsers([...users, user]);
    setName('');
    setAge('');
  };

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <div>Example video 10: hello world </div>
      <div className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input type="text" value={name} onChange={handleOnChangeName} />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select onChange={(event) => setSelectedCity(event.target.value)} defaultValue={selectedCity}>
            {city.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          {/* <select>
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>Hồ Chí Minh</option>
          </select> */}
        </div>

        <input type="submit" value="Submit" style={{ margin: '10px 0' }} onClick={handleSubmitForm} />
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
