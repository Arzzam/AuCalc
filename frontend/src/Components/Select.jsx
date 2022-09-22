import { useEffect } from "react";
import { useRef, useState } from "react";

// Todo: Glitch on ArrowUp scrolling on Page end select.
// Todo: HeadlessUi ListBox for Select.

function Select(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [scrollIndex, setScrollIndex] = useState();
  const contentRef = useRef();
  const selectRef = useRef();

  const defaultProps = {
    styles: {
      hoverClass: "bg-gray-300",
    },
  };

  useEffect(() => {
    if (!selectedOption) {
      setSelectedOption(Object.keys(props.options)[0]);
      setScrollIndex(0);
    }
  }, [props.options, selectedOption]);

  function handleClick(event) {
    setIsMenuOpen(true);
    event.preventDefault();
  }

  function handleBlur(event) {
    setIsMenuOpen(false);
    event.preventDefault();
  }

  function updateSelectedOption(id, value, index) {
    setSelectedOption(value);
    props.updateGrade(id, value);
    setScrollIndex(index);
    setIsMenuOpen(false);
  }

  function handleOptionClick(event) {
    let value = event.target.textContent;
    let index = 0;
    let contentChildren = contentRef.current.children;

    for (let i = 0; i < contentChildren.length; ++i) {
      if (contentChildren[i] === event.target) {
        index = i;
        break;
      }
    }
    updateSelectedOption(selectRef.current.id, value, index);
    event.preventDefault();
  }

  function addHoverClass(element) {
    let classString = " " + defaultProps.styles.hoverClass;
    if (!element.className.includes(classString)) {
      element.className += classString;
    }
  }

  function removeHoverClass(element) {
    let classString = " " + defaultProps.styles.hoverClass;
    element.className = element.className.replace(classString, "");
  }

  function scrollOptions(increment) {
    if (contentRef.current) {
      let contentChildren = contentRef.current.children;
      let currIndex = scrollIndex;
      increment =
        increment < 0 ? contentChildren.length + increment : increment;

      if (currIndex > -1) {
        removeHoverClass(contentChildren[currIndex]);
      }

      currIndex = (currIndex + increment) % contentChildren.length;
      contentChildren[currIndex].scrollIntoView();
      if (contentChildren[currIndex].textContent !== selectedOption) {
        addHoverClass(contentChildren[currIndex]);
      }
      setScrollIndex(currIndex);
    } else {
      setIsMenuOpen(true);
    }
  }

  function handleKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      if (isMenuOpen) {
        let index = scrollIndex;
        let value = contentRef.current.children[index].textContent;
        updateSelectedOption(selectRef.current.id, value, index);
      } else {
        setIsMenuOpen(true);
      }
    } else if (event.code === "ArrowDown") {
      scrollOptions(1);
    } else if (event.code === "ArrowUp") {
      scrollOptions(-1);
    } else if (event.code === "Escape") {
      if (!selectedOption) {
        setScrollIndex(-1);
      }
      setIsMenuOpen(false);
    }
  }

  function makeHover(event) {
    if (event.target.textContent !== selectedOption) {
      addHoverClass(event.target);
    }
    event.preventDefault();
  }

  function makeHoverOut(event) {
    removeHoverClass(event.target);
    event.preventDefault();
  }

  return (
    <div
      className={`group inline-block relative box-border outline-0 ${props.className}`}
      tabIndex={0}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      ref={selectRef}
      id={props.id}
    >
      <div className="relative text-left flex flex-wrap items-center border-solid border border-slate-300 group-hover:border-slate-500 group-focus:border-slate-500 rounded cursor-pointer justify-between min-h-fit transition-all">
        <div className="px-2">
          {selectedOption ? selectedOption : "Choose..."}
        </div>
        <div className="p-2 text-slate-300 group-hover:text-slate-500 group-focus:text-slate-500">
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            focusable="false"
            fill="currentcolor"
            stroke="currentcolor"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </div>
        {isMenuOpen && (
          <div
            className="absolute z-10 w-full py-1 top-full shadow-lg bg-white my-2 border-solid border rounded overflow-y-auto max-h-52"
            ref={contentRef}
          >
            {Object.keys(props.options).map((key, index) => {
              return (
                <div
                  className={`mx-1 px-2${
                    key === selectedOption ? " bg-black text-white" : ""
                  } rounded`}
                  key={index}
                  onMouseDown={handleOptionClick}
                  onMouseOver={makeHover}
                  onMouseOut={makeHoverOut}
                >
                  {key}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <input
        type="hidden"
        name="gradePoint"
        value={selectedOption || ""}
        disabled
      />
    </div>
  );
}

export default Select;
