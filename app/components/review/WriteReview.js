import React from "react";
import { View } from "react-native";
import * as Yup from "yup";
import tw from "tailwind-react-native-classnames";
import colors from "../../config/colors";
import SectionHeader from "../header/SectionHeader";
import Forminput from "../form/FormInput";
import Ratingforminput from "../form/RatingFormInput";
import Formsubmit from "../form/FormSubmit";
import Form from "../form/Form";

const NewReviewSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").label("Title"),
  message: Yup.string()
    .required("Message is required")
    .max(500)
    .label("Message"),
  rating: Yup.number().min(0.5, "Rating is required").label("Rating"),
});

const Writereview = () => {
  return (
    <View>
      <SectionHeader title="Write a Review" style={tw`my-4`} />
      <Form
        validationSchema={NewReviewSchema}
        initialValues={{ title: "", message: "", rating: 0 }}
      >
        <Forminput
          name="title"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
        />
        <Forminput
          name="message"
          multiline
          numberOfLines={5}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Message"
          numberOfLines={5}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ratingforminput
            name="rating"
            maxStars={5}
            starStyle={{ marginRight: 3 }}
            halfStarEnabled={true}
            starSize={30}
            fullStarColor={colors.yellow}
          />
          <Formsubmit text="submit" style={{ marginRight: 0 }} />
        </View>
      </Form>
    </View>
  );
};

export default Writereview;
