import { useState, useEffect } from 'react';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const SWIPE_THRESHOLD = 50;

const useSwipe = ({ onSwipeLeft, onSwipeRight }: SwipeHandlers) => {
  const [startX, setStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      setStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (startX === null) return;

      const currentX = event.touches[0].clientX;
      const deltaX = currentX - startX;

      if (deltaX > SWIPE_THRESHOLD) {
        if (onSwipeRight) onSwipeRight();
      } else if (deltaX < -SWIPE_THRESHOLD) {
        if (onSwipeLeft) onSwipeLeft();
      }

      setStartX(null);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [onSwipeLeft, onSwipeRight, startX]);

  return {};
};

export default useSwipe;
