interface ProfileSectionProps {
  name: string
  role: string
  bio: string
}

function ProfileSection({ name, role, bio }: ProfileSectionProps) {
  return (
    <section className="page-card">
      <h1>Profile</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
      <p>{bio}</p>
    </section>
  )
}

export default ProfileSection
