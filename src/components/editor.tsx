import { store } from "../store";
import { Icon } from "@iconify-icon/solid";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/core";

// Define PDF styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  name: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Raleway",
  },
  designation: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Raleway",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 14,
    fontFamily: "Helvetica",
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  itemDetails: {
    fontSize: 14,
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderRadius: 5,
  },
  skillsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  skillItem: {
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 14,
  },
});

const ResumeView = () => {
  // Function to generate PDF
  const generatePDF = () => {
    window.print();
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.name}>
            {store["full name"].split(" ")[0]}{" "}
            <Text style={{ fontWeight: "normal", color: "#0070f3" }}>
              {store["full name"].split(" ")[1]}
            </Text>
          </Text>
          <Text style={styles.designation}>{store.designation}</Text>
        </View>

        {/* Career Objective */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Icon
              icon="mdi:target-arrow"
              width="20"
              style={{
                backgroundColor: "#fef2f2",
                color: "#dc2626",
                padding: 5,
                borderRadius: 20,
                marginRight: 5,
              }}
            />
            About
          </Text>
          <Text style={styles.sectionContent}>{store.profile}</Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Icon
              icon="mdi:education-outline"
              width="20"
              style={{
                backgroundColor: "#f0f9ff",
                color: "#0369a1",
                padding: 5,
                borderRadius: 20,
                marginRight: 5,
              }}
            />
            Education
          </Text>
          {store.education.map((item, index) => (
            <View key={index} style={styles.sectionItem}>
              <Text style={styles.itemTitle}>{item.institution}</Text>
              <Text style={styles.itemDetails}>{item.time}</Text>
            </View>
          ))}
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Icon
              icon="uil:suitcase"
              width="20"
              style={{
                backgroundColor: "#f3e8ff",
                color: "#6d28d9",
                padding: 5,
                borderRadius: 20,
                marginRight: 5,
              }}
            />
            Work Experience
          </Text>
          {store["work experience"].map((item, index) => (
            <View key={index} style={styles.sectionItem}>
              <Text style={styles.itemTitle}>{item.company}</Text>
              <Text style={styles.itemDetails}>{item.time}</Text>
            </View>
          ))}
        </View>

        {/* Personal Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Icon
              icon="mdi:user-circle"
              width="20"
              style={{
                backgroundColor: "#e9d5ff",
                color: "#6366f1",
                padding: 5,
                borderRadius: 20,
                marginRight: 5,
              }}
            />
            Personal Details
          </Text>
          <View>
            {store.address && (
              <View style={styles.sectionItem}>
                <Text style={styles.itemTitle}>Address</Text>
                <Text style={styles.itemDetails}>{store.address}</Text>
              </View>
            )}
            <View style={styles.sectionItem}>
              <Text style={styles.itemTitle}>Phone</Text>
              <Text style={styles.itemDetails}>{store.phone}</Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.itemTitle}>Email</Text>
              <Text style={styles.itemDetails}>{store["email address"]}</Text>
            </View>
            <View style={styles.sectionItem}>
              <Text style={styles.itemTitle}>Github</Text>
              <Text style={styles.itemDetails}>@{store["github username"]}</Text>
            </View>
          </View>
        </View>

        {/* Skills and Interests */}
        <View style={[styles.section, styles.skillsContainer]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>
              <Icon
                icon="ph-code-bold"
                width="20"
                style={{
                  backgroundColor: "#fff7ed",
                  color: "#f97316",
                  padding: 5,
                  borderRadius: 20,
                  marginRight: 5,
                }}
              />
              Technical Skills
            </Text>
            {store.skills.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>
                {skill}
              </Text>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>
              <Icon
                icon="typcn:point-of-interest"
                width="20"
                style={{
                  backgroundColor: "#f0f0f0",
                  color: "#0070f3",
                  padding: 5,
                  borderRadius: 20,
                  marginRight: 5,
                }}
              />
              Interests & Hobbies
            </Text>
            {store.interests.map((interest, index) => (
              <Text key={index} style={styles.skillItem}>
                {interest}
              </Text>
            ))}
          </View>
        </View>

        {/* Open Source Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Icon
              icon="tabler:brand-open-source"
              width="20"
              style={{
                backgroundColor: "#d1fae5",
                color: "#16a34a",
                padding: 5,
                borderRadius: 20,
                marginRight: 5,
              }}
            />
            Open Source Projects
          </Text>
          {store.oss.map((project, index) => (
            <View key={index} style={styles.sectionItem}>
              <Text style={styles.itemTitle}>{project["project name"]}</Text>
              <Text style={styles.itemDetails}>({project.languages})</Text>
            </View>
          ))}
        </View>

        {/* Download Button */}
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text
            style={{
              backgroundColor: "#0070f3",
              color: "#fff",
              padding: 10,
              borderRadius: 5,
              cursor: "pointer",
            }}
            onPress={generatePDF}
          >
            Download PDF
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumeView;
