<template>
  <Navbar />
  <VideoHeader :videoId="videoId"/>
  <h3>Video</h3>
  {{videoId}}
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate libero nulla pariatur quod ratione
    tempore. Distinctio, ex fugiat iusto nesciunt non numquam porro quod repellat sapiente soluta tempora vel.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda dolorum hic impedit minus quod ratione,
    saepe sequi unde! Adipisci delectus ducimus id ipsam ipsum recusandae sit temporibus velit veritatis?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias, animi aut est et fugiat inventore
    minima, minus modi molestiae nam nemo perferendis provident quae quasi recusandae saepe vitae?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, culpa, ut. Aliquid aspernatur, dolorem
    explicabo itaque nihil odio perferendis placeat quia vel voluptatibus? Aliquam aliquid at atque autem consequatur
    delectus dicta distinctio dolorum eaque enim, esse eveniet facere illo, impedit in incidunt ipsam iste minima nisi
    non nulla obcaecati optio perferendis, quaerat quibusdam saepe suscipit vel veniam vero vitae? Architecto aspernatur
    molestiae similique tempora tempore unde voluptate! Autem cumque et facere, ipsa mollitia neque numquam odio odit
    quia quidem quis quisquam ratione reiciendis totam vitae. Distinctio dolor doloremque eaque enim fugit hic nemo
    nesciunt nostrum odit optio quam quibusdam quos rem repellat, sit vel voluptatem. Accusantium impedit qui
    repellendus ut! Beatae consequatur cumque esse hic minima molestias qui quia rem suscipit vel. Accusamus, animi
    commodi deserunt ducimus earum est et eum exercitationem expedita facere nemo nesciunt, odio pariatur quasi quia
    tempora veniam? Esse, incidunt ipsa ipsum iure magni nulla odit officiis tenetur? Aliquid aperiam consectetur
    distinctio excepturi facilis fuga illum inventore itaque libero mollitia neque nesciunt nisi officia, officiis omnis
    porro possimus ratione repellat ut vitae voluptas voluptate voluptatem! Accusamus accusantium, amet atque autem
    beatae blanditiis deleniti, enim facilis fugiat harum illum, ipsam labore laboriosam nam nemo nihil non obcaecati
    possimus praesentium quos ut vero vitae. Autem, cumque doloremque doloribus dolorum expedita iure laudantium maiores
    minus mollitia nihil, nulla repudiandae ut! Cum delectus eveniet iure, nostrum quo recusandae soluta. Culpa cumque
    delectus deleniti, deserunt ex facilis incidunt, iste nemo nostrum praesentium, recusandae repellat repellendus
    temporibus totam voluptate. Alias aut consequatur dignissimos dolor doloribus eaque est, exercitationem facere fugit
    harum in ipsam magni maiores nihil nostrum officia optio pariatur perferendis perspiciatis quam qui quia quo quod
    recusandae reiciendis temporibus totam vel veritatis voluptate voluptates. Ab amet assumenda cum dolores, earum eos
    esse eum explicabo facere, hic ipsa modi nemo obcaecati odit perferendis provident reiciendis repellat, sequi
    similique sint? Accusantium in ipsam nihil obcaecati odio officia praesentium qui repellat sit? Accusantium aperiam
    consectetur deleniti dolore est fugiat id illo libero magnam maiores minima neque, nisi pariatur quas quos ullam
    voluptates. Corporis inventore ipsa molestias numquam praesentium provident. Consequuntur corporis deleniti dolorem
    ea fugit id illo iure, laboriosam maxime minima nisi obcaecati, reiciendis rem, sed vel. Accusantium ducimus
    exercitationem explicabo possimus quod! Alias architecto cupiditate eos magnam minima minus nihil optio saepe velit.
    Beatae fugiat molestias necessitatibus perferendis provident. Architecto cumque cupiditate delectus doloremque
    eligendi eum facere ipsa iure, iusto magni maiores maxime quisquam repellendus tempore voluptates. Assumenda ducimus
    hic ipsam molestias veniam! Amet assumenda cum cumque eius error fugit libero, molestias nobis odio omnis quis sit
    tempora. Adipisci asperiores at cum, cupiditate debitis deleniti dolores eligendi ex exercitationem facilis harum in
    inventore ipsam, laborum magnam maiores modi nesciunt, nihil nostrum possimus quasi rem reprehenderit sapiente sed
    sit ullam ut veniam! Animi asperiores aspernatur autem corporis deserunt dolor eius eos et ex excepturi, impedit,
    labore quasi rerum sit, soluta suscipit temporibus ut velit. Ab alias amet at consequuntur cum doloremque earum ex
    impedit maiores minus nesciunt odio perferendis, reiciendis sed, tenetur vel, velit?</p>
  <!--<Player :video-id="videoId"></Player>-->
</template>

<script>
import Navbar from "@/components/Navbar";
import VideoHeader from "@/components/VideoHeader";
export default {
name: "Video",
  props: ['videoId'],
  components: {
    Navbar, VideoHeader
  }
}
</script>

<style scoped>

</style>
