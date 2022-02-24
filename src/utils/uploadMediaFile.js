import { supabase } from '../supabaseClient';

const uploadMediaFile = async function (mediaFile, fn) {
  const { data, error } = await supabase.storage
    .from('image')
    .upload(`${Date.now()}_${mediaFile.name}`);

  if (error) {
    console.error(error);
  }

  if (data) {
    const name = data.Key.split('/')[1];
    const { publicURL, error } = supabase.storage
      .from('image')
      .getPublicUrl(name);

    if (error) {
      console.error(error);
    }

    fn({ publicURL, name });
  }
};

export default uploadMediaFile;
