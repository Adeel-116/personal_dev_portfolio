import React, { createContext, useState, useContext } from "react";

// Define the shape of transform state for each card
interface TransformState {
  [key: string]: {
    rotateX: number;
    rotateY: number;
  };
}

interface TransformContextProps {
  transform: TransformState;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>, id: string) => void;
  handleMouseLeave: (id: string) => void;
}

// Create a context
const TransformContext = createContext<TransformContextProps | undefined>(undefined);

export const TransformProvider: React.FC<any> = ({ children }) => {
  // Store transform data for each card using an object
  const [transform, setTransform] = useState<TransformState>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();
    const centerX = left + width / 5;
    const centerY = top + height / 5;

    const rotateY = ((e.clientX - centerX) / width) * 10;
    const rotateX = -((e.clientY - centerY) / height) * 10;

    // Update the transform state for the specific id
    setTransform((prevState) => ({
      ...prevState,
      [id]: { rotateX, rotateY }, 
    }));
  };

  const handleMouseLeave = (id: string) => {
    setTransform((prevState) => ({
      ...prevState,
      [id]: { rotateX: 0, rotateY: 0 },
    }));
  };

  return (
    <TransformContext.Provider value={{ transform, handleMouseMove, handleMouseLeave }}>
      {children}
    </TransformContext.Provider>
  );
};

export const useTransform = (): TransformContextProps => {
  const context = useContext(TransformContext);
  if (!context) {
    throw new Error("useTransform must be used within a TransformProvider");
  }
  return context;
};
