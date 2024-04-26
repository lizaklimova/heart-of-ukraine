import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getAllRegions } from "api";
import { SelectBlock } from "./RegionsSelect.styled";

const RegionsSelect = ({ closeSelect, choseRegion }) => {
  const [regions, setRegions] = useState([]);

  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await getAllRegions();

      const ivanoFrankivskIndex = response?.findIndex(
        (reg) => reg.regionEn === "IVANO_FRANKIVSK"
      );

      const updatedRegs = [...response];
      updatedRegs[ivanoFrankivskIndex] = {
        regionEn: "IVANO-FRANKIVSK",
        regionUa: "ІВАНО-ФРАНКІВСЬКА",
      };

      setRegions(updatedRegs);
    };

    fetchRegions();
  }, []);

  const makeCapitalizedWord = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  };

  const makeOptionValue = (region, word) => {
    if (
      region.includes("ІВАНО-ФРАНКІВСЬК") ||
      region.includes("IVANO-FRANKIVSK")
    ) {
      return `${region
        .split("-")
        .map((word) => `${makeCapitalizedWord(word)}`)
        .join("-")} ${word}`;
    }

    if (region.includes("КРИМ") || region.includes("CRIMEA")) {
      return `${makeCapitalizedWord(region)}`;
    }

    return `${makeCapitalizedWord(region)} ${word}`;
  };

  return (
    <SelectBlock>
      <ul>
        {regions?.length > 0 &&
          regions.map((region) => (
            <li key={region.regionEn}>
              <button
                type="button"
                data-region={
                  i18n.language === "uk"
                    ? makeOptionValue(region.regionUa, "область")
                    : makeOptionValue(region.regionEn, "region")
                }
                data-regionen={region.regionEn}
                onClick={(event) => {
                  choseRegion(event);
                  closeSelect();
                }}
              >
                {i18n.language === "uk"
                  ? region.regionUa.toLowerCase()
                  : region.regionEn.toLowerCase()}
              </button>
            </li>
          ))}
      </ul>
    </SelectBlock>
  );
};

export default RegionsSelect;
