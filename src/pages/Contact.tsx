import { SocialButton, socials } from "../components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col p-8">
      <div className="bg-base-200 p-4 rounded-lg">
        <div className="text-4xl text-info font-bold p-2">
          Contact<br />Information
        </div>

        <div className="px-2 text-sm opacity-60">
          Timezone: Redmond, WA
        </div>

        <div className="p-2">
          Business email:<br />
          <a href="mailto:edguitar.dm.alt@gmail.com" className="text-primary underline">
            edguitar.dm.alt@gmail.com
          </a>
        </div>

        <div className="p-2">
          Personal email:<br />
          <a href="mailto:edguitar.dm@gmail.com" className="text-secondary underline">
            edguitar.dm@gmail.com
          </a>
        </div>

        <div className="flex flex-row p-2">
          {
            socials.map(social => {
              return (
                <SocialButton {...social} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
