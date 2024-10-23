import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export function AppForm(props) {
  const [temoignage, setTemoignage] = useState("");
  const [lieu, setLieu] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  async function publish() {
    if (temoignage.length == 0) {
      setError(true);
      return;
    }
    setError(false);
    setSending(true);
    const supabaseClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );

    const result = await supabaseClient.from("temoignages").insert({
      histoire: temoignage,
      lieu,
      identite: nom,
      email,
    });
    setTemoignage("");
    setSending(false);
    setDone(true);
  }

  return (
    <>
      {!done ? (
        <>
          <div className="sib-form">
            <div id="sib-form-container">
              <div id="sib-container">
                <div id="sib-form">
                  <div style={{ padding: "8px 0" }}>
                    <div className="sib-form-block title">
                      <p>
                        {props.en
                          ? "Sharing your experience"
                          : "Votre témoignage"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row">
                          <label className="entry__label" htmlFor="temoignage">
                            <span>
                              {props.en
                                ? "Experience (mandatory)"
                                : "Témoignage (obligatoire)"}
                              <span style={{ color: "#ff4949" }}>*</span>
                            </span>
                          </label>
                          <div className="entry__field">
                            <textarea
                              className="input"
                              type="text"
                              id="temoignage"
                              name="temoignage"
                              autoComplete="off"
                              value={temoignage}
                              rows="30"
                              onChange={(e) => setTemoignage(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row">
                          <label className="entry__label" htmlFor="lieu">
                            {props.en ? "Location" : "Lieu"}
                          </label>
                          <div className="entry__field">
                            <input
                              className="input"
                              type="text"
                              id="lieu"
                              name="lieu"
                              autoComplete="off"
                              value={lieu}
                              rows="30"
                              onChange={(e) => setLieu(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row">
                          <label className="entry__label" htmlFor="nom">
                            {props.en ? "Name" : "Nom"}
                          </label>
                          <div className="entry__field">
                            <input
                              className="input"
                              type="text"
                              id="nom"
                              name="nom"
                              autoComplete="off"
                              value={nom}
                              rows="30"
                              onChange={(e) => setNom(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row">
                          <label className="entry__label" htmlFor="email">
                            {props.en ? "Email address" : "Adresse email"}
                          </label>
                          <div className="entry__field">
                            <input
                              className="input"
                              type="text"
                              id="email"
                              name="email"
                              autoComplete="off"
                              value={email}
                              rows="30"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <label className="entry__specification">
                        {props.en ? (
                          <>
                            This email address won’t be shared. We may use it to
                            contact you.
                          </>
                        ) : (
                          <>
                            Cette adresse email ne sera jamais publiée. Elle
                            nous permettra de vous contacter si nécessaire.
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="sib-form-block">
                      <button
                        className="sib-form-block__button sib-form-block__button-with-loader"
                        disabled={sending}
                        onClick={() => publish()}
                        form="sib-form"
                        type="submit"
                      >
                        {props.en ? (
                          <>SHARE YOUR EXPERIENCE</>
                        ) : (
                          <>JE PARTAGE</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="notification">
            {props.en ? (
              <>Thanks for sharing your testimony.</>
            ) : (
              <>Nous avons bien reçu votre témoignage.</>
            )}
          </div>
          <div>
            <div className="sib-form-block">
              <button
                className="sib-form-block__button sib-form-block__button-with-loader"
                onClick={() => setDone(!done)}
                form="sib-form"
                type="submit"
              >
                {props.en ? (
                  <>Share another testimony</>
                ) : (
                  <>Faire un nouveau témoignage</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
