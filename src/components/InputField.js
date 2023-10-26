import { Switch } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import CenterIcon from "../../ui/CenterIcon";

import FlexRowReverse from "../../ui/FlexRowReverse";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import {
  getOptionTexts,
  remapOptionsTextToLabel,
} from "../../../utils/objects";
import Btns from "./Btns";

import ShowImage from "./ShowImage";
import modal from "../../../services/modalServices";
import swal from "sweetalert";
import { Icon } from "@iconify/react";
import { handleInputChange } from "../../../services/formServices";

const animatedComponents = makeAnimated();
const InputField = ({
  id = "",
  placeholder = "",
  icon = "",
  value = "",
  type = "text",
  onChange = handleInputChange,
  className = "",
  togglePassword = false,
  options = null,
  error = "",
  isDisabled = false,
  data = {},
  setData = null,
  errors = {},
  multiple = false,
  visible = true,
  initialData = {},
  submit_type = "",
  isRequired = true,
  isEditable = true,
  isCopy = false,
  returnInputRef = () => null,
  ...props
}) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    returnInputRef(inputRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const copyContent = () => {
    inputRef.current.select();
    navigator.clipboard.writeText(inputRef.current.value);
    setTimeout(() => {
      inputRef.current.blur();
    }, 500);
  };
  if (
    (id === "password" || id === "password_confirmation") &&
    type === "text" &&
    !togglePassword
  ) {
    type = "password";
  }
  if (type === "br") {
    <div className={`${className ? className : "px-5"}`}>
      <div className="h-1 bg-secondary-container smooth rounded-md w-full"></div>
    </div>;
  } else if (type === "btns") {
    return (
      <>
        <div className={`${className}`}>
          <Btns data={data} setData={setData} {...props} />
        </div>
      </>
    );
  } else if (type === "html") {
    return (
      <>
        <div className={`${className}`}>
          <div>{placeholder}</div>
        </div>
      </>
    );
  } else if (type === "datetime") {
    return (
      <>
        <div className={`${className} ${visible ? "" : "hidden"}`}>
          <span>{placeholder}</span>
          <div
            className={`form-reg__group ${errors[id] && "error"} ${
              isDisabled && "disabled"
            } `}
            {...props}
          >
            <input
              className={`smooth z-10`}
              onChange={
                !isDisabled ? (e) => onChange(e, id, data, setData) : null
              }
              type="datetime-local"
              required={isRequired}
              id={id}
              value={data[id]}
              disabled={isDisabled}
            />
            <span className="bg"></span>
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          {errors[id] && (
            <div className="pb-3 pt-1">
              <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
                {typeof errors[id] === "object" ? (
                  <div>- {errors[id][0]}</div>
                ) : (
                  <div>- {errors[id]}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );
  } else if (type === "date") {
    return (
      <>
        <div className={`${className} ${visible ? "" : "hidden"}`}>
          <span>{placeholder}</span>
          <div
            className={`form-reg__group ${errors[id] && "error"} ${
              isDisabled && "disabled"
            } `}
            {...props}
          >
            <input
              className={`smooth z-10`}
              onChange={
                !isDisabled ? (e) => onChange(e, id, data, setData) : null
              }
              type="date"
              required={isRequired}
              id={id}
              value={data[id]}
              disabled={isDisabled}
            />
            <span className="bg"></span>
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          {errors[id] && (
            <div className="pb-3 pt-1">
              <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
                {typeof errors[id] === "object" ? (
                  <div>- {errors[id][0]}</div>
                ) : (
                  <div>- {errors[id]}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );
  } else if (type === "file") {
    return (
      <>
        <div className={`relative ${className}`}>
          <div
            className={`form-reg__group relative ${errors[id] && "error"} ${
              isDisabled && "disabled"
            } `}
            {...props}
          >
            <div className="file-uploader">
              <input
                id={id}
                type="file"
                className="smooth z-10"
                required={isRequired}
                disabled={isDisabled}
                // defaultValue={data[id]}
                onChange={
                  !isDisabled
                    ? (e) => {
                        onChange(e, id, data, setData);
                      }
                    : null
                }
              />
            </div>
          </div>
          <ShowImage file={data[id]} />
          {errors[id] && (
            <div className="pb-3 pt-1">
              <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
                {typeof errors[id] === "object" ? (
                  <div>- {errors[id][0]}</div>
                ) : (
                  <div>- {errors[id]}</div>
                )}
              </div>
            </div>
          )}
          <div
            className={`w-full h-full inset-0 bg-inner-container z-10 opacity-90 smooth ${
              isDisabled ? "absolute" : "hidden"
            } `}
          ></div>
        </div>
      </>
    );
  } else if (type === "textarea") {
    return (
      <>
        <div className={`${className}`}>
          <div
            className={`form-reg__group ${errors[id] && "error"} ${
              isDisabled && "disabled"
            } `}
            {...props}
          >
            <textarea
              className="smooth z-10"
              onChange={
                !isDisabled ? (e) => onChange(e, id, data, setData) : null
              }
              type={type}
              required={isRequired}
              id={id}
              value={data[id]}
              disabled={isDisabled}
              ref={inputRef}
            >
              {data[id]}
            </textarea>
            <span className="bg"></span>
            <span className="highlight"></span>
            <span className="bar"></span>
            {!isDisabled && (
              <label>
                <FlexRowReverse>
                  {icon}
                  <span>{placeholder}</span>
                </FlexRowReverse>
              </label>
            )}
          </div>
          {errors[id] && (
            <div className="pb-3 pt-1">
              <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
                {typeof errors[id] === "object" ? (
                  <div>- {errors[id][0]}</div>
                ) : (
                  <div>- {errors[id]}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );
  } else if (type === "switch") {
    return (
      <div
        className={`for-reg__group space-x-1 space-x-reverse flex justify-between relative ${className}`}
      >
        <div className="font-h3 flex-center-both smooth clr-text-primary">
          <span>{placeholder}</span>
        </div>
        <Switch
          checked={!isDisabled && value ? value : data[id]}
          disabled={isDisabled}
          onChange={(value) =>
            onChange(
              {
                currentTarget: {
                  value: !isDisabled && value ? 1 : 0,
                  type: "checkbox",
                  id,
                },
              },
              id,
              data,
              setData
            )
          }
          className={`${
            (!isDisabled && value ? value : data[id])
              ? "bg-cyan-900"
              : "bg-slate-200"
          }  relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 ar`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              (!isDisabled && value ? value : data[id])
                ? "-translate-x-9"
                : "translate-x-0"
            }  pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex-center-both`}
          >
            <CenterIcon
              className={`text-slate-90 font-h1 text-cyan-600 transition duration-200 ${
                (!isDisabled && value ? value : data[id])
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              icon="typcn:tick"
            />
          </span>
        </Switch>
        <div
          className={`w-full h-full inset-0 bg-inner-container z-10 opacity-90 smooth rounded-md ${
            isDisabled ? "absolute" : "hidden"
          } `}
        ></div>
      </div>
    );
  } else if (type === "selectPro") {
    type = "select";
    let selectValue;

    const optionsTexts = getOptionTexts(options);
    if (multiple) {
      selectValue = data[id].map((value) => {
        return { value, label: optionsTexts[value] };
      });
    } else {
      if (data[id]) {
        selectValue = { value: data[id], label: optionsTexts[data[id]] };
      }
    }

    return (
      <div className={`react-select__outer-container relative ${className}`}>
        <Select
          id={id}
          value={selectValue}
          placeholder={placeholder}
          defaultValue={placeholder}
          options={remapOptionsTextToLabel(options)}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
            option: (base) => ({
              ...base,
              borderRadius: "5px",
              marginBottom: "3px",
              marginTop: "3px",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral0: "var(--color-primary-container)",
              primary: "var(--color-text-primary)",
              primary25: "var(--color-secondary-container)",
              primary50: "var(--color-third-container)",
            },
          })}
          onChange={
            !isDisabled
              ? (value) => {
                  if (value.length - data[id].length === 1) {
                    setTimeout(() => {
                      swal({
                        title: "ادخل الكميه المستخدمه فى المنتج",
                        content: {
                          element: "input",
                          attributes: {
                            type: "text",
                            value: inputValue,
                            style:
                              "color: #333; background-color: #f5f5f5; border: 1px solid #ccc;",
                            onChange: handleChange,
                          },
                        },
                        buttons: {
                          cancel: "إلغاء",
                          confirm: {
                            text: "اضافه",
                            value: true,
                            closeModal: true,
                          },
                        },
                      }).then((value) => {
                        if (value) {
                          setData((prev) => ({
                            ...prev,
                            ingredients_quantity: [
                              ...prev["ingredients_quantity"],
                              value,
                            ],
                          }));
                        } else {
                          setData((prev) => ({
                            ...prev,
                            ingredients_quantity: [
                              ...prev["ingredients_quantity"],
                              "1",
                            ],
                          }));
                        }
                      });
                    }, 100);
                  } else {
                    modal.message({
                      title:
                        "اذا قمت بمسح او ادخال مكون خطأ فمن فضلك اعد ادخال المكونات!",
                      icon: "error",
                      button: " حسنـًا ",
                      callback: () => {
                        let temp = { ...data };
                        temp["ingredients"] = [];
                        temp["ingredients_quantity"] = [];
                        setData({ ...temp });
                      },
                    });
                  }
                  onChange(
                    {
                      currentTarget: {
                        id,
                        type,
                        value,
                        isMulti: multiple,
                      },
                    },
                    id,
                    data,
                    setData
                  );
                }
              : null
          }
          isDisabled={isDisabled}
          isMulti={multiple}
          required={isRequired}
          components={animatedComponents}
          isRtl={true}
          isSearchable={true}
        />
        {errors[id] && (
          <div className="pb-3 pt-1">
            <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
              {typeof errors[id] === "object" ? (
                <div>- {errors[id][0]}</div>
              ) : (
                <div>- {errors[id]}</div>
              )}
            </div>
          </div>
        )}
        <div
          className={`w-full h-full inset-0 bg-inner-container z-10 opacity-90 smooth ${
            isDisabled ? "absolute" : "hidden"
          } `}
        ></div>
      </div>
    );
  } else if (type === "select") {
    let selectValue;

    const optionsTexts = getOptionTexts(options);
    if (multiple) {
      selectValue = data[id].map((value) => {
        return { value, label: optionsTexts[value] };
      });
    } else {
      if (data[id]) {
        selectValue = { value: data[id], label: optionsTexts[data[id]] };
      }
    }
    return (
      <div className={`react-select__outer-container relative ${className}`}>
        <Select
          id={id}
          value={selectValue}
          placeholder={placeholder}
          defaultValue={placeholder}
          options={remapOptionsTextToLabel(options)}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
            option: (base) => ({
              ...base,
              borderRadius: "5px",
              marginBottom: "3px",
              marginTop: "3px",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral0: "var(--color-primary-container)",
              primary: "var(--color-text-primary)",
              primary25: "var(--color-secondary-container)",
              primary50: "var(--color-third-container)",
            },
          })}
          onChange={
            !isDisabled
              ? (value) =>
                  onChange(
                    {
                      currentTarget: {
                        id,
                        type,
                        value,
                        isMulti: multiple,
                      },
                    },
                    id,
                    data,
                    setData
                  )
              : null
          }
          isDisabled={isDisabled}
          isMulti={multiple}
          required={isRequired}
          components={animatedComponents}
          isRtl={true}
          isSearchable={true}
        />
        {errors[id] && (
          <div className="pb-3 pt-1">
            <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
              {typeof errors[id] === "object" ? (
                <div>- {errors[id][0]}</div>
              ) : (
                <div>- {errors[id]}</div>
              )}
            </div>
          </div>
        )}
        <div
          className={`w-full h-full inset-0 bg-inner-container z-10 opacity-90 smooth ${
            isDisabled ? "absolute" : "hidden"
          } `}
        ></div>
      </div>
    );
  } else if (type === "search") {
    let selectValue;

    const optionsTexts = getOptionTexts(options);
    if (multiple) {
      selectValue = data[id].map((value) => {
        return { value, label: optionsTexts[value] };
      });
    } else {
      if (data[id]) {
        selectValue = { value: data[id], label: optionsTexts[data[id]] };
      }
    }
    return (
      <div className={`react-select__outer-container  relative ${className}`}>
        <Select
          id={id}
          value={selectValue}
          placeholder={placeholder}
          defaultValue={placeholder}
          options={remapOptionsTextToLabel(options)}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
            option: (base) => ({
              ...base,
              borderRadius: "5px",
              marginBottom: "3px",
              marginTop: "3px",
              cursor: "text",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral0: "var(--color-primary-container)",
              primary: "var(--color-text-primary)",
              primary25: "var(--color-secondary-container)",
              primary50: "var(--color-third-container)",
            },
          })}
          onChange={
            !isDisabled
              ? (value) =>
                  onChange(
                    {
                      currentTarget: {
                        id,
                        type,
                        value,
                        isMulti: multiple,
                      },
                    },
                    id,
                    data,
                    setData
                  )
              : null
          }
          isDisabled={isDisabled}
          isMulti={multiple}
          required={isRequired}
          components={animatedComponents}
          isRtl={true}
          isSearchable={true}
        />
        <Icon
          icon="cil:search"
          className="absolute dark:bg-[#111827] bg-white left-2 text-2xl top-2 cursor-pointer smooth"
        />
        {errors[id] && (
          <div className="pb-3 pt-1">
            <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
              {typeof errors[id] === "object" ? (
                <div>- {errors[id][0]}</div>
              ) : (
                <div>- {errors[id]}</div>
              )}
            </div>
          </div>
        )}
        <div
          className={`w-full h-full inset-0 bg-inner-container z-10 opacity-90 smooth ${
            isDisabled ? "absolute" : "hidden"
          } `}
        ></div>
      </div>
    );
  }

  return (
    <>
      <div className={`${className}`}>
        <div
          className={`form-reg__group  ${errors[id] && "error"} ${
            isDisabled && "disabled"
          } `}
          {...props}
        >
          {!isEditable ? (
            <div className="overlay-input w-full h-full absolute z-20"></div>
          ) : null}
          <input
            ref={inputRef}
            className="smooth z-10"
            onChange={
              !isDisabled ? (e) => onChange(e, id, data, setData) : null
            }
            type={type}
            required={isRequired}
            id={id}
            value={data[id]}
            disabled={isDisabled}
          />
          <span className="bg"></span>
          <span className="highlight"></span>
          <span className="bar"></span>
          {isCopy ? (
            <span
              className={`text-2xl cursor-pointer text-blue-600 z-40 absolute left-0 top-3 hover:text-blue-900 smooth`}
              title="Copy"
              onClick={copyContent}
            >
              <Icon icon="solar:copy-bold-duotone" />
            </span>
          ) : null}
          {!isDisabled && (
            <label>
              <FlexRowReverse>
                {icon}
                <span>{placeholder}</span>
              </FlexRowReverse>
            </label>
          )}
        </div>
        {errors[id] && (
          <div className="pb-3 pt-1">
            <div className="font-small text-white bg-rose-500 bg-opacity-70 rounded-md px-3 py-2">
              {typeof errors[id] === "object" ? (
                <div>- {errors[id][0]}</div>
              ) : (
                <div>- {errors[id]}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
