module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const memberList = members
    .map((member) => {
      if (typeof member === "string") {
        return member.trim()[0].toUpperCase();
      }
    })
    .filter((item) => item);

  return memberList.sort().join("");
};
