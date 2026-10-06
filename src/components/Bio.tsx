export interface BioProps {
  title: string
};

const bioContent = (
  <>
    I'm a software engineer specialized in real-time system development. My concentration areas are rigid-body simulations, embedded systems and GPU rendering/computing. Having lived in 6 countries across America, South America and Asia (Bolivia, Thailand, Argentina, Malaysia, Philippines, USA), I easily connect with people and work enabling a culture of learning to exceed expectations.
  </>
);

export default function Bio({ title }: BioProps) {
  return (
    <>
      <div className="pb-2">
        <text className="text-primary text-md md:text-xl font-light">{title}</text>
      </div>

      <div className="inline text-sm md:text-lg">
        {bioContent}
      </div>
    </>
  );
}
