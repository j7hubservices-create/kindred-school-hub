import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Trophy, Award, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import missAdeyemoImage from '@/assets/miss-adeyemo-award.jpg';

interface AwardCelebrationModalProps {
  onCelebrate?: () => void;
}

const AwardCelebrationModal: React.FC<AwardCelebrationModalProps> = ({ onCelebrate }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal automatically on component mount
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    const isMobile = window.innerWidth < 768;
    
    // Lighter confetti for mobile
    const particleCount = isMobile ? 50 : 100;
    const spread = isMobile ? 45 : 70;

    confetti({
      particleCount,
      spread,
      origin: { y: 0.6 },
      colors: ['#10b981', '#3b82f6', '#eab308'], // green, blue, yellow (school colors)
    });

    // Second burst for desktop
    if (!isMobile) {
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10b981', '#3b82f6', '#eab308'],
        });
      }, 250);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (open && !isOpen) {
      triggerConfetti();
    }
    setIsOpen(open);
  };

  const handleCelebrate = () => {
    onCelebrate?.();
    triggerConfetti();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4 p-0 border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
        <DialogClose className="absolute right-3 top-3 z-50 rounded-full bg-background/80 backdrop-blur-sm p-1.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-3 w-3 md:h-4 md:w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="p-4 md:p-6 lg:p-8 text-center space-y-4 md:space-y-6">
          {/* Award Image */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20">
            <img
              src={missAdeyemoImage}
              alt="Miss Adeyemo Emmanuella Adedamola with NECO Excellence Award"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              🎉 Congratulations, Miss Adeyemo!
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Message */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            We proudly celebrate Miss Adeyemo Emmanuella Adedamola, the{' '}
            <span className="font-semibold text-primary">Overall Best Candidate in Nigeria (NECO SSCE 2025)</span>, 
            winner of the ₦1,000,000 Learn Africa Prize for academic excellence.
          </p>

          {/* Highlight Badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <Badge variant="default" className="bg-primary/10 text-primary border-primary/20 px-3 py-1.5 text-xs md:text-sm">
              <Trophy className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              ₦1,000,000
            </Badge>
            <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 px-3 py-1.5 text-xs md:text-sm">
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              Best Candidate
            </Badge>
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 px-3 py-1.5 text-xs md:text-sm">
              <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              National Recognition
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 md:pt-4 space-y-3">
            <Button
              onClick={handleCelebrate}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🎉 Celebrate With Us
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-primary/20 text-primary hover:bg-primary/10 font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-xl"
            >
              <Link to="/results">
                <Trophy className="w-4 h-4 mr-2" />
                View All Results & Awards
              </Link>
            </Button>
          </div>

          {/* School Branding */}
          <div className="pt-2 border-t border-primary/10">
            <p className="text-xs md:text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Our God Reigns Crystal School</span>
              <br />
              ...a place for academic and moral excellence
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AwardCelebrationModal;