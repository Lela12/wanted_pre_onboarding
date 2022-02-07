# 1️⃣ Toggle
#### ❗구현 방법
- check/uncheck를 반복하면서 전환될 수 있도록 구현하였습니다.
- `Checkbox type="checkbox"`체크박스로 만들고, 체크박스는 스타일링 하기에 어려움이 있어 label을 만들어 체크박스와 연결하고 체크박스는 `display:none`으로 구현하였습니다.
- `useState`를 이용하여 토글 할 수 있는 `toggled` 값을 관리하며, toggle 값에 따라 토글 창의 배경색, 버튼의 위치, 설명이 바뀌게 하였습니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- 색이 변할 경우 서서히 색이 차오르게 구현하고 싶었는데, 토클시 색이 바로 바뀌는 어려움이 있었습니다.
- ` background: linear-gradient(to left, #4a00ce 50%, #c5c5c5 50%) left;`로 색을 채워놓고 `background-size: 200%;`로 설정하여, 회색만 보이게하고 OFF의 상태가 되었을 경우 천천히 보라 색으로 채워지게 됩니다.

#### 💡 실행 방법
`checkbox`를 체크박스 타입으로 만들고, `toggleHandler`함수를 통해 toggle의 true/false 값을 변경하였습니다. 동그란 버튼을 `position: absolute;`, Label을 `position: relative;`으로 하여 동그란 버튼이 Label 안에 들어가게 하였습니다. 버튼 클릭 시 삼항연산자를 이용하여, ON/OFF 유무를 보여주게 됩니다.
```
      <ToggleWrapper>
        <Checkbox type="checkbox" onChange={toggleHandler} />
        <Label />
        <Desc>
          <p>Toggle Switch {toggled ? "ON" : "OFF"}</p>
        </Desc>
      </ToggleWrapper>
```

# 2️⃣ Modal
#### ❗구현 방법
- `useState`를 이용하여 true이면 모달창을 보여주고, false이면 모달창을 닫습니다.
- Open Modal버튼 클릭시 onClick 이벤트를 통해 모달창을 보여주고, 외부배경에서 &times;로 나타낸 x표시 클릭시 모달창이 닫힙니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- 버튼 클릭시 모달창이 보이는 경우 배경을 클릭하면, 모달창이 닫히고 모달창 내부를 클릭하면 닫히지 않게 구현에 어려움이 있었습니다.
  - `onClick={(e) => e.stopPropagation()`을 적용하여 자식 컴포넌트에서는 작동하지 않도록 하므로써, 모달창 내부 클릭시 모달창이 닫히게 되는 문제를 해결하였습니다.
 
#### 💡 실행 방법
`isOpen` 이 true일 경우 모달창과 배경이 나타나게되고, x표시를 클릭하게 되면 모달창이 닫히게 됩니다. 이때, 외부 모달창 클릭시에는 닫히게 구현하였으며, `ModalBody`인 내부 모달은 `e.stopPropagation()`를 사용하여 x를 제외한 곳을 클릭시 어떠한 반응이 일어나지 않게 하였습니다.
```
    <Container>
      <Button onClick={toggleModal}>Open Modal</Button>
      {isOpen ? (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalBody role="dialog" onClick={(e) => e.stopPropagation()}>
            <div className="close-button" onClick={toggleModal}>
              &times;
            </div>
            <div>HELLO CODESTATES!</div>
          </ModalBody>
        </ModalBackground>
      ) : null}
    </Container>
```


# 3️⃣ Tab
#### ❗구현 방법
- `useState`를 사용해 `tapState`를 관리하였으며, 선택된 탭의 `index`를 통해 표시되게 되고, li 태그에 `onClick` 이벤트로 index값이 변할 때마다 `selectTabHandler(idx)`를 불러오게 하였습니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- 특정 탭을 클릭 시 index에 따라 `tab active`한 상태로 보여줘야 했는데 그 과정에서 어떻게 하여 구현을 해야할 지 어려움이 있었습니다.
- `tabList`를 `map`함수의 두번째 인자로 `index`를 넣어 해결 할 수 있었습니다.
#### 💡 실행 방법
- `onClick`을 실행할 때마다 `index`값을 onClick 핸들러 함수에 전달하게 되고, 그 값을 통해 `tabList`의 `className`을 바꿔 css속성을 다르게 주어 선택된 탭의 색만 변하게 됩니다.
```
    <div>
      <TapWrapper>
        {tabList.map((tab, index) => {
          return (
            <li
              key={index}
              className={`${index === tapState ? "tabList active" : "tabList"}`}
              onClick={() => selectTabHandler(index)}
            >
              {tab.id}
            </li>
          );
        })}
      </TapWrapper>
      <Desc>{tabList[tapState].content}</Desc>
    </div>
```

# 4️⃣ Tag
#### ❗구현 방법
- `input`값을 입력하고 `Enter`키를 입력하면 `addTags()`함수를 사용하여 추가되게 하였으며, 이전에 입력된 태그들을 포함하여 보여줍니다.
- `removeTags()`함수를 사용하여 삭제 후 나머지 배열들만 보이게 구현하였습니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
- `removeTags()`함수를 구현할 때 로직을 짜는 부분에 있어서 고민이 있었습니다.
- `filter`함수를 사용하여 `index`와 일치하지 않는 태그를 filtr하여 `setTags()`상태를 업데이트하게 됩니다.
#### 💡 실행 방법
`input`창에 값을 입력하고 `Enter`키를 누르게 되면 입력이 되고, 빈 값을 입력시에는 입력이 되지 않게 구현하였습니다. 또한, 해당 태그의 `x표시`를 클릭하게 되면 `removeTags()`함수를 사용하여 삭제가 되도록 하였습니다.
```
  const [tags, setTags] = useState(["CodeStates", "JJang"]);
  const removeTags = (index) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tags[index];
      })
    );
  };
  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };
```
# 5️⃣ AutoComplete
#### ❗구현 방법과 이유

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
#### 💡 실행 방법
# 6️⃣ ClickToEdit
#### ❗구현 방법과 이유
useRef()함수를 사용하여 name, age input창을 클릭 시 focus를 줄 수 있습니다. name과 age를 입력 시 바로 InputForm에 이름, 나이를 보여주었습니다. useState를 name:"김코딩", age:20으로 초기값을 주었습니다.

#### ⁉️ 구현하면서 어려웠던 점과 해결 방법
특정 input창 클릭시 수정이 되고 
#### 💡 실행 방법
