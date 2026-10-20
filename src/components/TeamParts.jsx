function TeamCard({ member, onClick }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="flex flex-col items-center text-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer w-full max-w-xs sm:max-w-none mx-auto"
      onClick={() => onClick(member)}
    >
      <div className="w-full h-56 overflow-hidden">
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-400">{initials}</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col items-center gap-1">
        <h3 className="text-gray-900 font-bold text-sm">{member.name}</h3>
        <p className="text-gray-500 text-sm">{member.role}</p>
        <span className="mt-2 text-xs text-[#2c5f86] font-medium underline underline-offset-2">
          Read bio →
        </span>
      </div>
    </div>
  );
}

export function TeamSection({ title, description, members, onSelect }) {
  return (
    <div className="mb-12">
      {title && (
        <div className="mb-6 pb-2 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          {description && (
            <p className="text-gray-500 text-sm mt-1">{description}</p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center sm:place-items-stretch">
        {members.map((member) => (
          <TeamCard
            key={member.name + member.role}
            member={member}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export function BioModal({ member, onClose }) {
  return (
    <>
      {member && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={() => onClose()}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-y-auto max-h-[70vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onClose()}
              className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm transition-all"
            >
              ✕
            </button>

            <div className="h-80 w-full overflow-hidden rounded-t-2xl flex-shrink-0">
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-400">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-gray-900 font-bold text-lg">
                {member.name}
              </h3>
              <p className="text-orange-500 text-sm font-medium">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mt-2">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
