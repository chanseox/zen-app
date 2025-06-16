import React from 'react';
import {
  FamilyIcon,
  NewsIcon,
  HealthIcon,
  WorkIcon,
  FriendsIcon,
  ParticipationIcon,
  SelfIcon,
  RelationshipsIcon,
  ActivitiesIcon,
  IndependenceIcon
} from '../components/trigger_icons';

export default function ResultBubble({ size, emotions, triggers }) {
    const topColors = emotions.slice(0, 3);
    const topTriggers = triggers.slice(0, 3);
    const gradient = `radial-gradient(circle,${topColors.join(', ')})`;
    const iconSize = size / 2.1;
    const familyIconAspectRatio = 22 / 102; // height / width for FamilyIcon
    const familyIconWidth = size * familyIconAspectRatio;

    const triggerIconMap = {
        'Family': <FamilyIcon size={iconSize / 1.2} color='white' />,
        'News': <NewsIcon size={iconSize} color='white'/>,
        'Health': <HealthIcon size={iconSize} color='white'/>,
        'Work': <WorkIcon size={iconSize} color='white'/>,
        'Friends': <FriendsIcon size={iconSize} color='white'/>,
        'Participation': <ParticipationIcon size={iconSize} color='white'/>,
        'Self': <SelfIcon size={iconSize} color='white'/>,
        'Relationships': <RelationshipsIcon size={iconSize} color='white'/>,
        'Activities': <ActivitiesIcon size={iconSize} color='white'/>,
        'Independence': <IndependenceIcon size={iconSize} color='white'/>
      };

    const blurAmount = Math.max(2, size / 2000);
    const iconPositions = [
        { top: `${size * 0.03}px`, left: `${size * 0.5 - iconSize / 2}px` }, // Top center
        { bottom: `${size * 0.1}px`, left: `${size * 0.03}px` },    // Bottom left
        { bottom: `${size * 0.1}px`, right: `${size * 0.03}px` }    // Bottom right
      ];

      return (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            background: gradient,
            filter: `blur(${blurAmount})`,
            position: 'relative'
          }}
        >
          {topTriggers.map((trigger, index) => {
            const Icon = triggerIconMap[trigger];

            // If the current trigger is 'Family', we apply the special position and size
            const isFamily = trigger === 'Family';
            
            // Adjust the position for FamilyIcon depending on its index
            let pos = iconPositions[index];
            if (isFamily) {
                if (index == 0) {
                    pos = { top: `${size * 0.08}px`, left: `${size * 0.5 - familyIconWidth / 4}px` }; // Top center
                } else if (index == 1) {
                    pos = { bottom: `${size * 0.15}px`, left: `${size * 0.2}px` };    // Bottom left
                } else if (index == 2) {
                    pos = { bottom: `${size * 0.15}px`, right: `${size * 0.2}px` };    // Bottom right
                }
            }
    
            return (
              <div
                key={trigger}
                className="absolute w-8 h-8 flex items-center justify-center"
                style={{ position: 'absolute', ...pos }}
              >
                {Icon}
              </div>
            );
          })}
        </div>
    );
}